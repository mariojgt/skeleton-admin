<template>
    <Transition name="fade">
      <div v-if="showSurvey" class="survey-overlay">
        <div class="survey-container">
          <!-- Close Button -->
          <button @click="dismissSurvey" class="close-button">
            <X class="w-5 h-5" />
          </button>

          <!-- Progress Indicator -->
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: `${progressPercentage}%` }"></div>
          </div>

          <!-- Survey Content -->
          <div class="survey-content">
            <!-- Intro Screen -->
            <div v-if="currentStep === 'intro'" class="survey-step">
              <div class="survey-icon warning">
                <AlertTriangle class="w-10 h-10 text-yellow-500" />
              </div>
              <h3 class="survey-title">We're Sorry to See You Go</h3>
              <p class="survey-description">
                Your feedback helps us improve. Tell us why you're cancelling and get a <span class="text-yellow-500 font-bold">{{ discountPercentage }}% discount</span> to come back anytime within {{ rejoinDays }} days.
              </p>
              <button @click="startSurvey" class="primary-button">
                <ThumbsUp class="w-4 h-4 mr-2" />
                <span>Share Feedback</span>
              </button>
              <div class="survey-footnote">
                Takes just 30 seconds, and helps us serve you better
              </div>
            </div>

            <!-- Questions -->
            <div v-else-if="currentStep === 'questions'" class="survey-step">
              <h3 class="survey-title">{{ questions[currentQuestionIndex].text }}</h3>

              <!-- Multiple Choice Question Type -->
              <div v-if="questions[currentQuestionIndex].type === 'choice'" class="choice-container">
                <div
                  v-for="(option, index) in questions[currentQuestionIndex].options"
                  :key="index"
                  @click="selectOption(option)"
                  :class="[
                    'choice-option',
                    answers[currentQuestionIndex] === option ? 'choice-selected' : ''
                  ]"
                >
                  {{ option }}
                </div>
              </div>

              <!-- Text Question Type -->
              <div v-if="questions[currentQuestionIndex].type === 'text'" class="text-container">
                <textarea
                  v-model="answers[currentQuestionIndex]"
                  class="text-input"
                  :placeholder="questions[currentQuestionIndex].placeholder"
                  rows="3"
                ></textarea>
              </div>

              <!-- Navigation Buttons -->
              <div class="navigation-buttons">
                <button
                  v-if="currentQuestionIndex > 0"
                  @click="previousQuestion"
                  class="secondary-button"
                >
                  <ChevronLeft class="w-4 h-4 mr-1" />
                  Back
                </button>
                <button
                  @click="nextQuestion"
                  class="primary-button"
                  :disabled="!canProceed"
                >
                  <span v-if="isLastQuestion">Finish</span>
                  <span v-else>Next</span>
                  <ChevronRight v-if="!isLastQuestion" class="w-4 h-4 ml-1" />
                  <CheckCircle v-else class="w-4 h-4 ml-1" />
                </button>
              </div>

              <!-- Question Counter -->
              <div class="question-counter">
                Question {{ currentQuestionIndex + 1 }}/{{ questions.length }}
              </div>
            </div>

            <!-- Thank You Screen -->
            <div v-else-if="currentStep === 'thanks'" class="survey-step">
              <div class="survey-icon success">
                <PartyPopper class="w-10 h-10 text-primary-500" />
              </div>
              <h3 class="survey-title">Thanks for Your Feedback!</h3>

              <!-- Promotion Code -->
              <div class="promo-container">
                <div class="promo-label">Your {{ discountPercentage }}% Comeback Discount:</div>
                <div class="promo-code">
                  <span>{{ promoCode }}</span>
                  <button @click="copyPromoCode" class="copy-button">
                    <component :is="copyIcon" class="w-4 h-4" />
                  </button>
                </div>
                <div v-if="codeCopied" class="copied-message">
                  Copied to clipboard!
                </div>
                <div class="promo-expiry" v-if="promoExpiry">
                  Valid until: {{ formatDate(promoExpiry) }}
                </div>
              </div>

              <p class="survey-description">
                Miss us and want to come back? Use this code at checkout for {{ discountPercentage }}% off when you rejoin.
              </p>

              <button @click="closeSurvey" class="primary-button">
                <CheckCircle class="w-4 h-4 mr-2" />
                <span>Got it, Thanks</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>

  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { usePage, router } from '@inertiajs/vue3';
  import { api } from "../../../Boot/axios.js";
  import {
    X,
    AlertTriangle,
    ThumbsUp,
    ChevronLeft,
    ChevronRight,
    CheckCircle,
    PartyPopper,
    Copy,
    Check
  } from 'lucide-vue-next';

  const props = defineProps({
    initialDelay: {
      type: Number,
      default: 0 // No delay when triggered by cancellation
    },
    discountPercentage: {
      type: Number,
      default: null // Will be read from config if not provided
    },
    rejoinDays: {
      type: Number,
      default: 30 // Days the comeback offer is valid for
    }
  });

  // Emits
  const emit = defineEmits(['complete', 'close']);

  // Survey visibility state
  const showSurvey = ref(false);
  const currentStep = ref('intro');
  const currentQuestionIndex = ref(0);
  const answers = ref([]);
  const promoCode = ref('');
  const promoExpiry = ref(null);
  const codeCopied = ref(false);
  const copyIcon = ref(Copy);

  // Define the questions for cancellation survey
  const questions = ref([
    {
      id: 'cancellation_reason',
      text: 'What\'s the main reason you\'re cancelling?',
      type: 'choice',
      options: [
        'Too expensive',
        'Not using it enough',
        'Found a better alternative',
        'Missing features I need',
        'Technical issues',
        'Just temporary - plan to come back',
        'Other'
      ],
      required: true
    },
    {
      id: 'features_missing',
      text: 'Which features were most important to you?',
      type: 'choice',
      options: [
        'Game development tutorials',
        'Asset downloads',
        'Community support',
        'Project templates',
        'Code snippets',
        'Advanced courses'
      ],
      required: true
    },
    {
      id: 'price_perception',
      text: 'What would be a fair monthly price for our service?',
      type: 'choice',
      options: [
        'Less than £5',
        '£5 - £10',
        '£10 - £15',
        '£15 - £20',
        'More than £20',
        'Price wasn\'t the issue'
      ],
      required: true
    },
    {
      id: 'return_likelihood',
      text: 'How likely are you to return in the future?',
      type: 'choice',
      options: [
        'Very likely',
        'Somewhat likely',
        'Unsure',
        'Somewhat unlikely',
        'Very unlikely'
      ],
      required: true
    },
    {
      id: 'improvement_feedback',
      text: 'What could we improve to win you back?',
      type: 'text',
      required: false,
      placeholder: 'Suggestions for improvements, features, or anything else on your mind...'
    }
  ]);

  // Get settings from config
  const surveyConfig = computed(() => {
    return usePage().props.surveyConfig || {};
  });

  const discountPercentage = computed(() => {
    return props.discountPercentage || surveyConfig.value.cancellation_discount_percentage || 20;
  });

  // Calculate progress
  const progressPercentage = computed(() => {
    if (currentStep.value === 'intro') return 0;
    if (currentStep.value === 'thanks') return 100;
    return (currentQuestionIndex.value / questions.value.length) * 100;
  });

  // Check if the current question has been answered
  const canProceed = computed(() => {
    if (currentStep.value !== 'questions') return true;

    const currentQuestion = questions.value[currentQuestionIndex.value];
    if (!currentQuestion.required) return true;

    return answers.value[currentQuestionIndex.value] !== undefined &&
           answers.value[currentQuestionIndex.value] !== '';
  });

  // Check if this is the last question
  const isLastQuestion = computed(() => {
    return currentQuestionIndex.value === questions.value.length - 1;
  });

  // Utility to format dates
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Public method to open the survey
  const openSurvey = () => {
    showSurvey.value = true;
    // Store in localStorage that the cancellation survey was shown
    localStorage.setItem('cancellationSurveyShown', 'true');
  };

  // Survey actions
  function startSurvey() {
    currentStep.value = 'questions';
    // Initialize answers array
    answers.value = Array(questions.value.length).fill('');
  }

  function selectOption(option) {
    answers.value[currentQuestionIndex.value] = option;
  }

  function nextQuestion() {
    if (isLastQuestion.value) {
      submitSurvey();
    } else {
      currentQuestionIndex.value++;
    }
  }

  function previousQuestion() {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--;
    }
  }

  let isSubmitting = ref(false);
  async function submitSurvey() {
    if (isSubmitting.value) return;

    isSubmitting.value = true;

    // Prepare survey data - add a cancellation_survey flag
    const surveyData = {
      responses: questions.value.map((question, index) => ({
        question_id: question.id,
        answer: answers.value[index],
        question_text: question.text,
      })),
      survey_type: 'cancellation' // Add this to differentiate from regular feedback
    };

    try {
      // Use the same API endpoint as the regular survey
      const response = await api.post(route('survey.submit'), surveyData);

      // Handle the response
      if (response.data && response.data.success) {
        // Extract promo code data
        if (response.data.message) {
          const data = response.data.message;
          if (data.promoCode) {
            promoCode.value = data.promoCode;
          }
          if (data.expiry) {
            promoExpiry.value = data.expiry;
          }
          if (data.discountPercentage) {
            discountPercentage.value = data.discountPercentage;
          }
        }

        // Move to the thanks screen
        currentStep.value = 'thanks';

        // Emit completion event
        emit('complete', {
          answers: answers.value,
          questions: questions.value
        });
      }
    } catch (error) {
      console.error('Failed to submit cancellation survey:', error);

      // Still show the thank you screen even if there's an error
      currentStep.value = 'thanks';
    } finally {
      isSubmitting.value = false;
    }
  }

  function copyPromoCode() {
    navigator.clipboard.writeText(promoCode.value)
      .then(() => {
        codeCopied.value = true;
        copyIcon.value = Check;

        // Reset after 2 seconds
        setTimeout(() => {
          codeCopied.value = false;
          copyIcon.value = Copy;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy promo code:', err);
      });
  }

  function dismissSurvey() {
    showSurvey.value = false;
    emit('close');
  }

  function closeSurvey() {
    showSurvey.value = false;
    emit('close');
  }

  // Expose the openSurvey method
  defineExpose({
    openSurvey
  });
  </script>

  <style scoped>
  .survey-overlay {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 400px;
    width: calc(100% - 40px);
  }

  .survey-container {
    background-color: #1E293B;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(234, 179, 8, 0.15);
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(234, 179, 8, 0.2);
  }

  .close-button {
    position: absolute;
    top: 12px;
    right: 12px;
    color: #94A3B8;
    background: rgba(15, 23, 42, 0.5);
    border-radius: 9999px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    z-index: 10;
    transition: all 0.2s ease;
  }

  .close-button:hover {
    background: rgba(15, 23, 42, 0.8);
    color: white;
  }

  .progress-container {
    height: 4px;
    background-color: rgba(234, 179, 8, 0.1);
    width: 100%;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(to right, #EAB308, #F59E0B);
    transition: width 0.3s ease;
  }

  .survey-content {
    padding: 24px;
  }

  .survey-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .survey-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(234, 179, 8, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  .survey-icon.warning {
    background-color: rgba(234, 179, 8, 0.1);
  }

  .survey-icon.success {
    background-color: rgba(16, 185, 129, 0.1);
  }

  .survey-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    margin-bottom: 12px;
  }

  .survey-description {
    color: #CBD5E1;
    margin-bottom: 20px;
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  .survey-footnote {
    color: #94A3B8;
    font-size: 0.75rem;
    margin-top: 12px;
  }

  .primary-button {
    background: linear-gradient(to right, #EAB308, #F59E0B);
    color: #0F172A;
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    min-width: 120px;
  }

  .primary-button:hover {
    box-shadow: 0 4px 12px rgba(234, 179, 8, 0.3);
    transform: translateY(-2px);
  }

  .primary-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .secondary-button {
    background: rgba(30, 41, 59, 0.8);
    color: #CBD5E1;
    border: 1px solid rgba(234, 179, 8, 0.2);
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .secondary-button:hover {
    background: rgba(30, 41, 59, 1);
    color: white;
  }

  .choice-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 20px 0;
    width: 100%;
  }

  .choice-option {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    background-color: #0F172A;
    border: 1px solid rgba(234, 179, 8, 0.2);
    text-align: left;
    color: #CBD5E1;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .choice-option:hover {
    background-color: rgba(234, 179, 8, 0.05);
    border-color: rgba(234, 179, 8, 0.4);
  }

  .choice-selected {
    background-color: rgba(234, 179, 8, 0.2);
    border-color: rgba(234, 179, 8, 0.6);
    color: white;
  }

  .text-container {
    width: 100%;
    margin: 20px 0;
  }

  .text-input {
    width: 100%;
    background-color: #0F172A;
    border: 1px solid rgba(234, 179, 8, 0.2);
    border-radius: 8px;
    padding: 12px;
    color: white;
    resize: vertical;
    transition: border-color 0.2s ease;
  }

  .text-input:focus {
    outline: none;
    border-color: rgba(234, 179, 8, 0.6);
  }

  .text-input::placeholder {
    color: #64748B;
  }

  .navigation-buttons {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .question-counter {
    margin-top: 16px;
    color: #94A3B8;
    font-size: 0.75rem;
  }

  .promo-container {
    background-color: rgba(15, 23, 42, 0.6);
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    width: 100%;
  }

  .promo-label {
    color: #94A3B8;
    font-size: 0.75rem;
    margin-bottom: 8px;
  }

  .promo-code {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(to right, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.1));
    border: 1px dashed rgba(234, 179, 8, 0.3);
    padding: 8px 16px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 1.25rem;
    font-weight: 600;
    color: #EAB308;
    letter-spacing: 1px;
  }

  .promo-expiry {
    margin-top: 8px;
    font-size: 0.75rem;
    color: #94A3B8;
    text-align: center;
  }

  .copy-button {
    background: none;
    border: none;
    color: #94A3B8;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .copy-button:hover {
    color: white;
    background-color: rgba(234, 179, 8, 0.1);
  }

  .copied-message {
    color: #10B981;
    font-size: 0.75rem;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Transition animations */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  /* Responsive adjustments */
  @media (max-width: 480px) {
    .survey-overlay {
      bottom: 10px;
      right: 10px;
      width: calc(100% - 20px);
    }
  }
  </style>
