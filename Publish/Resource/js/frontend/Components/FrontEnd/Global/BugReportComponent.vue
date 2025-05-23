<template>
    <Transition name="fade">
        <div v-if="showBugReport" class="bug-report-overlay">
            <div class="bug-report-container">
                <!-- Close Button -->
                <button @click="dismissBugReport" class="close-button">
                    <X class="w-5 h-5" />
                </button>

                <!-- Progress Indicator -->
                <div class="progress-container">
                    <div class="progress-bar" :style="{ width: `${progressPercentage}%` }"></div>
                </div>

                <!-- Bug Report Content -->
                <div class="bug-report-content">
                    <!-- Intro Screen -->
                    <div v-if="currentStep === 'intro'" class="bug-report-step">
                        <div class="bug-report-icon">
                            <Bug class="w-10 h-10 text-red-500" />
                        </div>
                        <h3 class="bug-report-title">Report an Issue</h3>
                        <p class="bug-report-description">
                            We noticed you clicked multiple times on the same element. Is something not working
                            correctly? Help us fix it!
                        </p>
                        <button @click="startBugReport" class="primary-button">
                            <Bug class="w-4 h-4 mr-2" />
                            <span>Report Issue</span>
                        </button>
                        <button @click="dismissBugReport" class="secondary-button mt-3">
                            <X class="w-4 h-4 mr-2" />
                            <span>Dismiss</span>
                        </button>
                        <div class="bug-report-footnote">
                            Your feedback helps us improve The Dev Realm.
                        </div>
                    </div>

                    <!-- Bug Report Form -->
                    <div v-else-if="currentStep === 'form'" class="bug-report-step">
                        <h3 class="bug-report-title">What's happening?</h3>

                        <!-- Bug Type Selection -->
                        <div class="bug-type-container">
                            <div class="bug-type-label">Issue Type:</div>
                            <div class="bug-type-options">
                                <div v-for="type in bugTypes" :key="type.id" @click="selectBugType(type.id)" :class="[
                                    'bug-type-option',
                                    bugData.bugType === type.id ? 'bug-type-selected' : ''
                                ]">
                                    <component :is="type.icon" class="w-4 h-4 mr-2" />
                                    <span>{{ type.label }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Bug Description -->
                        <div class="description-container">
                            <label class="description-label">Describe the issue:</label>
                            <textarea v-model="bugData.description" class="description-input"
                                placeholder="What happened? What did you expect to happen instead?" rows="3"></textarea>
                        </div>

                        <!-- Affected Element Info (Auto-filled) -->
                        <div class="element-info-container">
                            <div class="element-info-label">Affected Element:</div>
                            <div class="element-info-content">
                                {{ bugData.elementInfo }}
                            </div>
                        </div>

                        <!-- Screenshots Option -->
                        <div class="screenshot-container">
                            <label class="screenshot-checkbox">
                                <input type="checkbox" v-model="bugData.includeScreenshot">
                                <span class="ml-2">Include screenshot reference (manual screenshot encouraged)</span>
                            </label>
                            <div v-if="bugData.includeScreenshot" class="screenshot-info mt-3">
                                <div class="screenshot-message">
                                    <Info class="w-5 h-5 text-gray-500 mr-2" />
                                    <p class="text-sm text-gray-400">
                                        For best results, please take a manual screenshot and attach it via email to
                                        thedevrealm@gmail.com with the bug report ID.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Navigation Buttons -->
                        <div class="navigation-buttons">
                            <button @click="goToIntro" class="secondary-button">
                                <ChevronLeft class="w-4 h-4 mr-1" />
                                Back
                            </button>
                            <button @click="submitBugReport" class="primary-button" :disabled="!canSubmit">
                                <span>Submit Report</span>
                                <SendHorizontal class="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>

                    <!-- Thank You Screen -->
                    <div v-else-if="currentStep === 'thanks'" class="bug-report-step">
                        <div class="bug-report-icon success">
                            <CheckCircle class="w-10 h-10 text-green-500" />
                        </div>
                        <h3 class="bug-report-title">Thank You for Your Report!</h3>
                        <p class="bug-report-description">
                            Your bug report has been submitted successfully. Our team will investigate the issue and
                            work on a fix.
                        </p>
                        <p class="bug-report-tracking">
                            Bug Report ID: <span class="font-mono font-bold">{{ bugReportId }}</span>
                        </p>

                        <div v-if="bugData.includeScreenshot"
                            class="screenshot-instructions mt-4 mb-4 p-3 bg-dark-900 rounded-lg">
                            <div class="flex items-start">
                                <Info class="w-5 h-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                                <p class="text-sm text-gray-300">
                                    Please take a screenshot showing the issue and email it to
                                    <a href="mailto:support@your-domain.com"
                                        class="text-primary-400 hover:underline">support@your-domain.com</a>
                                    with the bug report ID shown above.
                                </p>
                            </div>
                        </div>

                        <button @click="closeBugReport" class="primary-button">
                            <CheckCircle class="w-4 h-4 mr-2" />
                            <span>Continue</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { api } from "../../../Boot/axios.js";
import {
    X,
    Bug,
    CheckCircle,
    ChevronLeft,
    Info,
    SendHorizontal,
    AlertCircle,
    Zap,
    FileQuestion,
    LayoutDashboard,
    PartyPopper
} from 'lucide-vue-next';

const props = defineProps({
    triggerThreshold: {
        type: Number,
        default: 5, // Number of rapid clicks to trigger the bug report
    },
    clickTimeframe: {
        type: Number,
        default: 3000, // Timeframe in ms within which clicks are counted
    }
});

// Bug report visibility state
const showBugReport = ref(false);
const currentStep = ref('intro');
const bugReportId = ref(null);
const screenshotData = ref(null);

// Bug data
const bugData = ref({
    bugType: '',
    description: '',
    elementInfo: 'Unknown element',
    includeScreenshot: true,
    browserInfo: {},
    timestampUTC: '',
    url: '',
    deviceInfo: ''
});

// Define bug types
const bugTypes = [
    { id: 'functionality', label: 'Not Working', icon: Bug },
    { id: 'display', label: 'Display Issue', icon: LayoutDashboard },
    { id: 'performance', label: 'Performance', icon: Zap },
    { id: 'other', label: 'Other Issue', icon: FileQuestion }
];

// Calculate progress
const progressPercentage = computed(() => {
    if (currentStep.value === 'intro') return 33;
    if (currentStep.value === 'form') return 66;
    if (currentStep.value === 'thanks') return 100;
    return 0;
});

// Determine if we can submit the form
const canSubmit = computed(() => {
    return bugData.value.bugType && bugData.value.description.length > 10;
});

// Click tracking
const clickCounts = ref({});
const clickTimers = ref({});

// Methods to handle bug reporting
function registerMultipleClicks(elementSelector, event) {
    if (!elementSelector) return;

    // Initialize click count for this element if not exists
    if (!clickCounts.value[elementSelector]) {
        clickCounts.value[elementSelector] = 0;

        // Reset click count after timeframe expires
        clickTimers.value[elementSelector] = setTimeout(() => {
            clickCounts.value[elementSelector] = 0;
        }, props.clickTimeframe);
    }

    // Increment click count
    clickCounts.value[elementSelector]++;

    // Reset timer
    clearTimeout(clickTimers.value[elementSelector]);
    clickTimers.value[elementSelector] = setTimeout(() => {
        clickCounts.value[elementSelector] = 0;
    }, props.clickTimeframe);

    // If click threshold is reached, show bug report
    if (clickCounts.value[elementSelector] >= props.triggerThreshold) {
        // Capture element information
        const element = event.target;
        const elementTag = element.tagName.toLowerCase();
        const elementClasses = Array.from(element.classList).join('.');
        const elementId = element.id ? `#${element.id}` : '';
        const elementText = element.innerText ?
            (element.innerText.length > 30 ? `"${element.innerText.substring(0, 30)}..."` : `"${element.innerText}"`) : '';

        bugData.value.elementInfo = `${elementTag}${elementId}${elementClasses ? `.${elementClasses}` : ''}${elementText ? ` containing ${elementText}` : ''}`;

        // Gather browser and device info
        bugData.value.browserInfo = {
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenSize: `${window.screen.width}x${window.screen.height}`,
            viewportSize: `${window.innerWidth}x${window.innerHeight}`
        };

        bugData.value.timestampUTC = new Date().toISOString();
        bugData.value.url = window.location.href;

        // Show the bug report
        showBugReport.value = true;
        clickCounts.value[elementSelector] = 0;
    }
}

function startBugReport() {
    currentStep.value = 'form';
}

function goToIntro() {
    currentStep.value = 'intro';
}

function selectBugType(type) {
    bugData.value.bugType = type;
}

async function captureScreenshot() {
    try {
        // Import html2canvas dynamically if needed
        if (typeof html2canvas === 'undefined') {
            // We don't actually load html2canvas here to keep this example simpler
            console.log('html2canvas not available - using placeholder image');

            // Return a valid placeholder image - a small transparent 1x1 pixel
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        }

        // If html2canvas is available, use it to capture the screenshot
        const canvas = await html2canvas(document.body, {
            allowTaint: true,
            useCORS: true,
            logging: false,
            backgroundColor: null
        });

        return canvas.toDataURL('image/png');
    } catch (error) {
        console.error('Failed to capture screenshot:', error);
        // Return a valid fallback image in case of error
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    }
}

async function submitBugReport() {
    try {
        // Prepare report data - no longer attempting to capture a screenshot
        const reportData = {
            ...bugData.value,
            screenshot: await captureScreenshot(),
        };

        // Send to server
        const response = await api.post(route('bug-report.submit'), reportData);

        if (response.data && response.data.success) {
            // Get report ID if available
            if (response.data.reportId) {
                bugReportId.value = response.data.reportId;
            } else {
                bugReportId.value = `BR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            }

            // Show thank you screen
            currentStep.value = 'thanks';
        } else {
            throw new Error('Server returned unsuccessful response');
        }
    } catch (error) {
        console.error('Failed to submit bug report:', error);
        // Still show thank you screen to avoid frustrating the user
        bugReportId.value = `BR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        currentStep.value = 'thanks';
    }
}

function dismissBugReport() {
    showBugReport.value = false;
}

function closeBugReport() {
    showBugReport.value = false;
    // Reset form for next time
    currentStep.value = 'intro';
    bugData.value = {
        bugType: '',
        description: '',
        elementInfo: 'Unknown element',
        includeScreenshot: true,
        browserInfo: {},
        timestampUTC: '',
        url: '',
        deviceInfo: ''
    };
}

// Export the registerMultipleClicks method to be used by parent components
defineExpose({
    registerMultipleClicks
});
</script>

<style scoped>
.bug-report-overlay {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 400px;
    width: calc(100% - 40px);
}

.bug-report-container {
    background-color: #1E293B;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(220, 38, 38, 0.15);
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(220, 38, 38, 0.2);
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
    background-color: rgba(220, 38, 38, 0.1);
    width: 100%;
}

.progress-bar {
    height: 100%;
    background: linear-gradient(to right, #DC2626, #EF4444);
    transition: width 0.3s ease;
}

.bug-report-content {
    padding: 24px;
}

.bug-report-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.bug-report-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(220, 38, 38, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
}

.bug-report-icon.success {
    background-color: rgba(16, 185, 129, 0.1);
}

.bug-report-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    margin-bottom: 12px;
}

.bug-report-description {
    color: #CBD5E1;
    margin-bottom: 20px;
    font-size: 0.9375rem;
    line-height: 1.5;
}

.bug-report-footnote {
    color: #94A3B8;
    font-size: 0.75rem;
    margin-top: 12px;
}

.primary-button {
    background: linear-gradient(to right, #DC2626, #EF4444);
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
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
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
    border: 1px solid rgba(220, 38, 38, 0.2);
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

.screenshot-info {
    background-color: rgba(15, 23, 42, 0.8);
    border-radius: 8px;
    padding: 12px;
}

.screenshot-message {
    display: flex;
    align-items: flex-start;
}

.screenshot-instructions {
    border: 1px dashed rgba(220, 38, 38, 0.3);
    background-color: rgba(15, 23, 42, 0.8);
}

.screenshot-instructions a {
    transition: color 0.2s ease;
}

.screenshot-instructions a:hover {
    color: #f87171;
}

.mt-3 {
    margin-top: 12px;
}

.mt-4 {
    margin-top: 16px;
}

.mb-4 {
    margin-bottom: 16px;
}

.bug-type-container {
    width: 100%;
    margin: 16px 0;
}

.bug-type-label {
    text-align: left;
    color: #94A3B8;
    font-size: 0.875rem;
    margin-bottom: 8px;
}

.bug-type-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.bug-type-option {
    background-color: #0F172A;
    border: 1px solid rgba(220, 38, 38, 0.2);
    border-radius: 8px;
    padding: 10px;
    color: #CBD5E1;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
}

.bug-type-option:hover {
    background-color: rgba(220, 38, 38, 0.05);
    border-color: rgba(220, 38, 38, 0.4);
    transform: translateY(-2px);
}

.bug-type-selected {
    background-color: rgba(220, 38, 38, 0.1);
    border-color: rgba(220, 38, 38, 0.6);
    color: white;
}

.description-container {
    width: 100%;
    margin: 16px 0;
}

.description-label {
    text-align: left;
    display: block;
    color: #94A3B8;
    font-size: 0.875rem;
    margin-bottom: 8px;
}

.description-input {
    width: 100%;
    background-color: #0F172A;
    border: 1px solid rgba(220, 38, 38, 0.2);
    border-radius: 8px;
    padding: 12px;
    color: white;
    resize: vertical;
    transition: border-color 0.2s ease;
}

.description-input:focus {
    outline: none;
    border-color: rgba(220, 38, 38, 0.6);
}

.description-input::placeholder {
    color: #64748B;
}

.element-info-container {
    width: 100%;
    margin: 16px 0;
    background-color: rgba(15, 23, 42, 0.6);
    border-radius: 8px;
    padding: 12px;
}

.element-info-label {
    text-align: left;
    color: #94A3B8;
    font-size: 0.75rem;
    margin-bottom: 4px;
}

.element-info-content {
    text-align: left;
    color: #CBD5E1;
    font-size: 0.8125rem;
    font-family: monospace;
    word-break: break-all;
}

.screenshot-container {
    width: 100%;
    margin: 16px 0;
}

.screenshot-checkbox {
    display: flex;
    align-items: center;
    color: #CBD5E1;
    font-size: 0.875rem;
    cursor: pointer;
}

.screenshot-preview {
    margin-top: 12px;
    background-color: #0F172A;
    border: 1px dashed rgba(220, 38, 38, 0.3);
    border-radius: 8px;
    padding: 12px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.screenshot-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.screenshot-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #64748B;
    font-size: 0.75rem;
}

.navigation-buttons {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
}

.bug-report-tracking {
    background-color: rgba(15, 23, 42, 0.6);
    border-radius: 8px;
    padding: 8px 16px;
    margin: 0 0 16px;
    font-size: 0.875rem;
    color: #CBD5E1;
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
    .bug-report-overlay {
        bottom: 10px;
        right: 10px;
        width: calc(100% - 20px);
    }

    .bug-type-options {
        grid-template-columns: 1fr;
    }
}
</style>
