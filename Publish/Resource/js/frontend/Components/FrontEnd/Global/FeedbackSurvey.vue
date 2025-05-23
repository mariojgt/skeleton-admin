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
              <div class="survey-icon">
                <MessageSquare class="w-10 h-10 text-primary-500" />
              </div>
              <h3 class="survey-title">Help Us Improve The Dev Realm</h3>
              <p class="survey-description">
                Take our quick survey (just {{ questions.length }} questions!) and get a <span class="text-primary-500 font-bold">{{ discountPercentage }}% discount</span> on your next purchase.
              </p>
              <button @click="startSurvey" class="primary-button">
                <ThumbsUp class="w-4 h-4 mr-2" />
                <span>Start Survey</span>
              </button>
              <div class="survey-footnote">
                Won't take more than 30 seconds, we promise!
              </div>
            </div>

            <!-- Questions -->
            <div v-else-if="currentStep === 'questions'" class="survey-step">
              <h3 class="survey-title">{{ questions[currentQuestionIndex].text }}</h3>

              <!-- Rating Question Type -->
              <div v-if="questions[currentQuestionIndex].type === 'rating'" class="rating-container">
                <div
                  v-for="rating in 5"
                  :key="rating"
                  @click="selectRating(rating)"
                  :class="[
                    'rating-option',
                    answers[currentQuestionIndex] === rating ? 'rating-selected' : ''
                  ]"
                >
                  {{ rating }}
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
                <div class="promo-label">Your {{ discountPercentage }}% Discount Code:</div>
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
                Use this code at checkout for {{ discountPercentage }}% off your next purchase.
              </p>

              <button @click="closeSurvey" class="primary-button">
                <ShoppingCart class="w-4 h-4 mr-2" />
                <span>Continue Shopping</span>
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
    MessageSquare,
    ThumbsUp,
    ChevronLeft,
    ChevronRight,
    CheckCircle,
    PartyPopper,
    Copy,
    Check,
    ShoppingCart
  } from 'lucide-vue-next';

  const props = defineProps({
    initialDelay: {
      type: Number,
      default: null // Will be read from config if not provided
    },
    discountPercentage: {
      type: Number,
      default: null // Will be read from config if not provided
    }
  });

  // Survey visibility state
  const showSurvey = ref(false);
  const surveyShown = ref(false);
  const currentStep = ref('intro');
  const currentQuestionIndex = ref(0);
  const answers = ref([]);
  const promoCode = ref('');
  const promoExpiry = ref(null);
  const codeCopied = ref(false);
  const copyIcon = ref(Copy);

  // Define the questions directly in the component
  const questions = ref([
    {
      id: 'likely_to_use',
      text: 'How likely are you to use The Dev Realm for your game development needs?',
      type: 'rating',
      required: true
    },
    {
      id: 'price_perception',
      text: 'How do you feel about our pricing?',
      type: 'rating',
      required: true
    },
    {
      id: 'features_importance',
      text: 'How important are the following features to you?',
      type: 'rating',
      required: true
    },
    {
      id: 'ease_of_use',
      text: 'How easy is it to use The Dev Realm?',
      type: 'rating',
      required: true
    },
    {
      id: 'recommendation',
      text: 'Would you recommend The Dev Realm to a friend?',
      type: 'rating',
      required: true
    },
    {
      id: 'videos',
      text: 'You think our videos are well made and informative?',
      type: 'rating',
      required: true
    },
    {
      id: 'feedback',
      text: 'Do you have any other feedback for us?',
      type: 'text',
      required: false,
      placeholder: 'What features would you like to see? How can we improve?'
    }
  ]);

  // Get settings from config
  const surveyConfig = computed(() => {
    return usePage().props.surveyConfig || {};
  });

  const initialDelayMs = computed(() => {
    return props.initialDelay || surveyConfig.value.initial_delay || 20000;
  });

  const discountPercentage = computed(() => {
    return props.discountPercentage || surveyConfig.value.discount_percentage || 15;
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

  // Show the survey after the initial delay
  onMounted(() => {
    // Check local storage to see if the user has dismissed or completed the survey
    const surveyDismissed = localStorage.getItem('surveyDismissed');
    const surveyCompleted = localStorage.getItem('surveyCompleted');

    if (!surveyDismissed && !surveyCompleted) {
      setTimeout(() => {
        if (!surveyShown.value) {
            console.log('here');
          showSurvey.value = true;
          surveyShown.value = true;
        }
      }, initialDelayMs.value);
    }
  });

  // Survey actions
  function startSurvey() {
    currentStep.value = 'questions';
    // Initialize answers array
    answers.value = Array(questions.value.length).fill('');
  }

  function selectRating(rating) {
    answers.value[currentQuestionIndex.value] = rating;
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

    // Prepare survey data
    const surveyData = {
        responses: questions.value.map((question, index) => ({
        question_id: question.id,
        answer: answers.value[index],
        question_text: question.text
        }))
    };

    try {
        // Use the api wrapper instead of axios directly
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

        // Mark survey as completed in local storage
        localStorage.setItem('surveyCompleted', 'true');

        // Set expiry for completed status based on config
        const completedDays = surveyConfig.value.completed_cookie_days || 365;
        setTimeout(() => {
            localStorage.removeItem('surveyCompleted');
        }, completedDays * 24 * 60 * 60 * 1000);
        }
    } catch (error) {
        console.error('Failed to submit survey:', error);

        // Still show the thank you screen even if there's an error
        currentStep.value = 'thanks';
        localStorage.setItem('surveyCompleted', 'true');
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
    // Mark as dismissed in local storage
    localStorage.setItem('surveyDismissed', Date.now().toString());

    // Auto-reset the dismissed state after config-specified days
    const dismissedDays = surveyConfig.value.dismissed_cookie_days || 7;
    setTimeout(() => {
      localStorage.removeItem('surveyDismissed');
    }, dismissedDays * 24 * 60 * 60 * 1000);
  }

  function closeSurvey() {
    showSurvey.value = false;
  }

  // Reset dismissed status if it's older than configured days
  onMounted(() => {
    const dismissedTime = localStorage.getItem('surveyDismissed');
    if (dismissedTime) {
      const dismissedDate = Number(dismissedTime);
      const dismissedDays = surveyConfig.value.dismissed_cookie_days || 7;
      const dismissedDaysMs = dismissedDays * 24 * 60 * 60 * 1000;

      if (Date.now() - dismissedDate > dismissedDaysMs) {
        localStorage.removeItem('surveyDismissed');
      }
    }
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
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(139, 92, 246, 0.15);
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(139, 92, 246, 0.2);
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
    background-color: rgba(139, 92, 246, 0.1);
    width: 100%;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(to right, #64FFDA, #8B5CF6);
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
    background-color: rgba(139, 92, 246, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
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
    background: linear-gradient(to right, #8B5CF6, #6366F1);
    color: white;
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
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
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
    border: 1px solid rgba(139, 92, 246, 0.2);
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

  .rating-container {
    display: flex;
    gap: 12px;
    margin: 20px 0;
  }

  .rating-option {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: #0F172A;
    border: 1px solid rgba(139, 92, 246, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #CBD5E1;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .rating-option:hover {
    background-color: rgba(139, 92, 246, 0.05);
    border-color: rgba(139, 92, 246, 0.4);
    transform: translateY(-2px);
  }

  .rating-selected {
    background-color: rgba(139, 92, 246, 0.2);
    border-color: rgba(139, 92, 246, 0.6);
    color: white;
  }

  .text-container {
    width: 100%;
    margin: 20px 0;
  }

  .text-input {
    width: 100%;
    background-color: #0F172A;
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    padding: 12px;
    color: white;
    resize: vertical;
    transition: border-color 0.2s ease;
  }

  .text-input:focus {
    outline: none;
    border-color: rgba(139, 92, 246, 0.6);
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
    background: linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1));
    border: 1px dashed rgba(139, 92, 246, 0.3);
    padding: 8px 16px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 1.25rem;
    font-weight: 600;
    color: #8B5CF6;
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
    background-color: rgba(139, 92, 246, 0.1);
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

    .rating-container {
      gap: 8px;
    }

    .rating-option {
      width: 36px;
      height: 36px;
    }
  }
  </style>
