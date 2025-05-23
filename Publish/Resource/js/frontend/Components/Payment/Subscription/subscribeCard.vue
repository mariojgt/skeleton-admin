<template>
    <div class="subscription-card" :class="{ 'is-popular': isPopular }">
      <!-- Glow effect for popular plan -->
      <div v-if="isPopular" class="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-xl blur-lg -z-10 animate-pulse-slow"></div>

      <!-- Popular badge -->
      <div v-if="isPopular" class="popular-badge">
        <div class="badge-content">
          <Crown class="w-3 h-3 mr-1" />
          <span>MOST POPULAR</span>
        </div>
      </div>

      <!-- Main card -->
      <div class="card-container" :class="isPopular ? 'popular-border' : 'standard-border'">
        <!-- Header section with game-inspired design -->
        <div class="card-header" :class="isPopular ? 'popular-header' : 'standard-header'">
          <!-- Plan name and icon -->
          <div class="plan-title-row">
            <div class="plan-icon-container">
              <div class="plan-icon" :class="isPopular ? 'popular-icon' : 'standard-icon'">
                <GraduationCap v-if="plan.name.includes('Pro') || plan.name.includes('Premium')" class="icon" />
                <Gamepad v-else-if="plan.name.includes('Game')" class="icon" />
                <Code v-else-if="plan.name.includes('Dev')" class="icon" />
                <Settings2 v-else class="icon" />
              </div>
              <div class="icon-glow" :class="isPopular ? 'popular-glow' : 'standard-glow'"></div>
            </div>

            <div>
              <h3 class="plan-name">{{ plan.name }}</h3>
              <div v-if="isPopular" class="premium-label">
                <Trophy class="trophy-icon" />
                <span>Game Dev Recommended</span>
              </div>
              <div v-else class="basic-label">
                <Shield class="basic-icon" />
                <span>Essential Plan</span>
              </div>
            </div>
          </div>

          <!-- Price information -->
          <div class="price-container">
            <div class="price" :class="isPopular ? 'popular-price' : 'standard-price'">
              {{ makeMoney(plan.displayPrice) }}
              <span class="price-period">/{{ plan.billingPeriod }}</span>
            </div>

            <!-- Show original price for yearly billing with discount -->
            <div v-if="plan.originalPrice" class="original-price">
              <span class="line-through text-slate-400">{{ makeMoney(plan.originalPrice) }}</span>
              <span class="ml-2 savings-badge">
                <Zap class="w-3 h-3 mr-1" />
                Save 20%
              </span>
            </div>

            <div class="billing-note">
              <Clock class="time-icon" />
              <span>{{ plan.auto_renew ? 'Cancel anytime' : 'One time payment' }}</span>
            </div>
          </div>
        </div>

        <!-- Accent divider with game-inspired design -->
        <div class="accent-divider-container">
          <div class="accent-divider" :class="isPopular ? 'popular-accent' : 'standard-accent'"></div>
          <div class="accent-dot left-dot" :class="isPopular ? 'popular-dot' : 'standard-dot'"></div>
          <div class="accent-dot right-dot" :class="isPopular ? 'popular-dot' : 'standard-dot'"></div>
        </div>

        <!-- Features area -->
        <div class="features-container">
          <!-- Game Dev Power Cards -->
          <div class="power-card-heading">Game Dev Powers</div>
          <div class="power-cards">
            <div v-for="(capability, index) in plan.capabilities" :key="index"
                 class="power-card"
                 :class="{'power-card-premium': isPopular}">
              <div class="power-icon"
                   :class="getCapabilityIconClass(capability.type)">
                <component :is="getCapabilityIcon(capability.type)" class="w-4 h-4" />
              </div>
              <div class="power-info">
                <div class="power-name">{{ formatCapabilityName(capability.name) }}</div>
                <div class="power-limit">
                  <template v-if="capability.is_unlimited">
                    <Infinity class="w-3 h-3 mr-1" /> Unlimited Access
                  </template>
                  <template v-else-if="capability.restriction_type === 'credits'">
                    <Coins class="w-3 h-3 mr-1" /> {{ capability.initial_credits }} Credits
                  </template>
                  <template v-else>
                    <ListChecks class="w-3 h-3 mr-1" /> {{ capability.usage_limit }} / {{ formatRestrictionType(capability.restriction_type) }}
                  </template>
                </div>
              </div>
            </div>
          </div>

          <!-- Key benefits section -->
          <div class="key-benefits-section">
            <div class="benefits-heading">Key Benefits</div>
            <ul class="benefits-list">
              <li v-for="(feature, index) in parseFeatures(plan.description)" :key="index" class="benefit-item">
                <div class="benefit-icon-container" :class="isPopular ? 'popular-benefit-container' : 'standard-benefit-container'">
                  <CheckCircle2 class="benefit-check-icon" :class="isPopular ? 'popular-check' : 'standard-check'" />
                </div>
                <span class="benefit-text">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- AI Assistant callout for premium -->
          <div v-if="isPopular" class="ai-assistant-callout">
            <div class="ai-assistant-inner">
              <MessageSquare class="w-5 h-5 text-purple-400" />
              <div>
                <div class="ai-assistant-title">Game Dev AI Assistant</div>
                <div class="ai-assistant-desc">Get help with Unreal Engine blueprints and game design</div>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <button @click="selectPlan" class="action-button"
                  :class="isPopular ? 'popular-button' : 'standard-button'">
            <component :is="isPopular ? 'Sparkles' : 'ArrowRight'" class="button-icon" />
            <span>{{ isPopular ? 'Unlock Premium Powers' : 'Get Started' }}</span>
          </button>

          <!-- Additional info -->
          <div class="additional-info">
            <div v-if="isPopular" class="users-count">
              <Users class="w-4 h-4 mr-1" />
              <span>Joined by 5,000+ game developers</span>
            </div>
            <div v-else class="secure-payment">
              <Lock class="w-4 h-4 mr-1" />
              <span>Secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { makeMoney } from "@frontend_components/../Composable/Money.js";
  import {
    Clock,
    CheckCircle2,
    Shield,
    Zap,
    Trophy,
    GraduationCap,
    Settings2,
    BookOpen,
    Download,
    Code,
    MessageCircle,
    Infinity,
    Award,
    Crown,
    Lock,
    Users,
    Gamepad,
    Sparkles,
    ArrowRight,
    MessageSquare,
    Coins,
    ListChecks,
    CodeSquare,
    Video,
    FileBox,
    Brush
  } from 'lucide-vue-next';

  const props = defineProps({
    plan: {
      type: Object,
      required: true
    },
    isPopular: {
      type: Boolean,
      default: false
    },
    billingCycle: {
      type: String,
      default: 'monthly'
    }
  });

  const emit = defineEmits(["selectPlan"]);

  const selectPlan = () => {
    emit("selectPlan", props.plan);
  };

  // Parse features from HTML description
  const parseFeatures = (description) => {
    // If we're in a browser environment
    if (typeof DOMParser !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(description, 'text/html');
      const items = doc.querySelectorAll('li');
      return Array.from(items).map(item => item.textContent);
    }

    // Fallback for SSR
    const features = [];
    const regex = /<li>(.*?)<\/li>/g;
    let match;

    while ((match = regex.exec(description)) !== null) {
      features.push(match[1].replace(/<[^>]*>/g, ''));
    }

    return features;
  };

  // Format capability names to be more user-friendly
  const formatCapabilityName = (name) => {
    // Map of raw capability names to user-friendly names
    const nameMap = {
      'Access Premium Courses': 'Premium Courses',
      'Download Digital Resources': 'Digital Resources',
      'Project Templates': 'Project Templates',
      'access_premium_courses': 'Premium Courses',
      'download_digital_resources': 'Digital Resources',
      'project_templates': 'Project Templates',
      'game_dev_ai': 'Game Dev AI'
    };

    return nameMap[name] || name;
  };

  // Format restriction type to be more user-friendly
  const formatRestrictionType = (type) => {
    // Map of raw restriction types to user-friendly types
    const typeMap = {
      'month': 'Month',
      'year': 'Year',
      'downloads': 'Downloads',
      'projects': 'Projects'
    };

    return typeMap[type] || type;
  };

  // Get the appropriate icon for each capability type
  const getCapabilityIcon = (type) => {
    switch (type) {
      case 'access_premium_courses':
        return Video;
      case 'download_digital_resources':
        return FileBox;
      case 'project_templates':
        return CodeSquare;
      case 'game_dev_ai':
        return MessageCircle;
      case 'store_assets':
        return Brush;
      default:
        return Award;
    }
  };

  // Get the appropriate CSS class for each capability icon background
  const getCapabilityIconClass = (type) => {
    switch (type) {
      case 'access_premium_courses':
        return 'power-icon-courses';
      case 'download_digital_resources':
        return 'power-icon-resources';
      case 'project_templates':
        return 'power-icon-templates';
      case 'game_dev_ai':
        return 'power-icon-ai';
      case 'store_assets':
        return 'power-icon-assets';
      default:
        return 'power-icon-default';
    }
  };
  </script>

  <style scoped>
  /* Base card styling with game-inspired theme */
  .subscription-card {
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    perspective: 1000px;
  }

  .subscription-card:hover {
    transform: translateY(-6px);
  }

  .card-container {
    border-radius: 1rem;
    background-color: #1E293B;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    position: relative;
    backdrop-filter: blur(10px);
  }

  /* Border styling with gaming aesthetic */
  .standard-border {
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25), 0 0 15px rgba(100, 255, 218, 0.1);
  }

  .standard-border:hover {
    border-color: rgba(100, 255, 218, 0.5);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 255, 218, 0.2);
  }

  .popular-border {
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.2);
  }

  .popular-border:hover {
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35), 0 0 25px rgba(139, 92, 246, 0.3);
  }

  /* Popular badge with gaming theme */
  .popular-badge {
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .badge-content {
    padding: 0.25rem 1rem;
    background: linear-gradient(to right, #8B5CF6, #6366F1);
    color: white;
    font-weight: bold;
    font-size: 0.75rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Popular card scaling with 3D effect */
  .is-popular {
    z-index: 10;
    transform: scale(1.03);
  }

  .is-popular:hover {
    transform: translateY(-6px) scale(1.03) rotateX(2deg);
  }

  /* Header section with theme-appropriate styling */
  .card-header {
    padding: 1.5rem;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .standard-header {
    background: linear-gradient(to bottom, rgba(16, 185, 129, 0.05), transparent);
  }

  .popular-header {
    background: linear-gradient(to bottom, rgba(139, 92, 246, 0.05), transparent);
  }

  .plan-title-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .plan-icon-container {
    position: relative;
  }

  .plan-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .standard-icon {
    background: linear-gradient(135deg, #64FFDA, #10B981);
    color: #0F172A;
  }

  .popular-icon {
    background: linear-gradient(135deg, #8B5CF6, #6366F1);
    color: white;
  }

  /* Glowing effect behind icons */
  .icon-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    top: 0;
    left: 0;
    filter: blur(8px);
    z-index: 1;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .standard-glow {
    background: #64FFDA;
  }

  .popular-glow {
    background: #8B5CF6;
  }

  .subscription-card:hover .icon-glow {
    opacity: 0.9;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .plan-name {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .premium-label {
    display: flex;
    align-items: center;
    color: #9333EA;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 0.375rem;
  }

  .basic-label {
    display: flex;
    align-items: center;
    color: #64FFDA;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 0.375rem;
  }

  .trophy-icon, .basic-icon {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
  }

  /* Price section with gaming-inspired design */
  .price-container {
    margin-top: 1.25rem;
  }

  .price {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.375rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .standard-price {
    color: #64FFDA;
  }

  .popular-price {
    color: #8B5CF6;
  }

  .price-period {
    color: #CBD5E1;
    font-size: 1rem;
    font-weight: normal;
  }

  /* Original price styling with gaming theme */
  .original-price {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
  }

  .savings-badge {
    display: flex;
    align-items: center;
    padding: 0.125rem 0.5rem;
    background-color: rgba(245, 158, 11, 0.1);
    border-radius: 1rem;
    color: #F59E0B;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .billing-note {
    display: flex;
    align-items: center;
    color: #CBD5E1;
    font-size: 0.75rem;
    opacity: 0.8;
  }

  .time-icon {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
  }

  /* Accent divider with gaming design elements */
  .accent-divider-container {
    position: relative;
    height: 4px;
    width: 100%;
  }

  .accent-divider {
    height: 100%;
    width: 100%;
  }

  .standard-accent {
    background: linear-gradient(to right, transparent, #64FFDA, transparent);
  }

  .popular-accent {
    background: linear-gradient(to right, transparent, #8B5CF6, transparent);
  }

  .accent-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: -2px;
  }

  .left-dot {
    left: 20%;
  }

  .right-dot {
    right: 20%;
  }

  .standard-dot {
    background-color: #64FFDA;
    box-shadow: 0 0 8px #64FFDA;
  }

  .popular-dot {
    background-color: #8B5CF6;
    box-shadow: 0 0 8px #8B5CF6;
  }

  /* Features section with gaming aesthetic */
  .features-container {
    padding: 1.5rem;
  }

  /* Power Cards (Capabilities) with gaming theme */
  .power-card-heading {
    color: #CBD5E1;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
    opacity: 0.7;
  }

  .power-cards {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-bottom: 1.5rem;
  }

  .power-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: rgba(15, 23, 42, 0.6);
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .power-card:hover {
    transform: translateY(-2px);
    background-color: rgba(15, 23, 42, 0.8);
  }

  .power-card-premium:hover {
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
  }

  .power-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .power-icon-courses {
    background: linear-gradient(135deg, #64FFDA, #10B981);
    color: #0F172A;
  }

  .power-icon-resources {
    background: linear-gradient(135deg, #8B5CF6, #6366F1);
    color: white;
  }

  .power-icon-templates {
    background: linear-gradient(135deg, #F59E0B, #D97706);
    color: white;
  }

  .power-icon-ai {
    background: linear-gradient(135deg, #EC4899, #DB2777);
    color: white;
  }

  .power-icon-assets {
    background: linear-gradient(135deg, #06B6D4, #0891B2);
    color: white;
  }

  .power-icon-default {
    background: linear-gradient(135deg, #64FFDA, #10B981);
    color: #0F172A;
  }

  .power-info {
    flex: 1;
  }

  .power-name {
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .power-limit {
    display: flex;
    align-items: center;
    color: #CBD5E1;
    font-size: 0.75rem;
    margin-top: 0.25rem;
    opacity: 0.8;
  }

  /* Key benefits section */
  .key-benefits-section {
    margin-bottom: 1.5rem;
  }

  .benefits-heading {
    color: #CBD5E1;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
    opacity: 0.7;
  }

  .benefits-list {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .benefit-item {
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    transition: transform 0.2s ease;
  }

  .benefit-item:hover {
    transform: translateX(4px);
  }

  .benefit-icon-container {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0.125rem;
  }

  .standard-benefit-container {
    background-color: rgba(100, 255, 218, 0.1);
  }

  .popular-benefit-container {
    background-color: rgba(139, 92, 246, 0.1);
  }

  .benefit-check-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .standard-check {
    color: #64FFDA;
  }

  .popular-check {
    color: #8B5CF6;
  }

  .benefit-text {
    color: #CBD5E1;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  /* AI Assistant callout for premium plans */
  .ai-assistant-callout {
    margin-bottom: 1.5rem;
    background-color: rgba(139, 92, 246, 0.1);
    border-radius: 0.5rem;
    padding: 0.75rem;
    border: 1px solid rgba(139, 92, 246, 0.2);
  }

  .ai-assistant-inner {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .ai-assistant-title {
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .ai-assistant-desc {
    color: #CBD5E1;
    font-size: 0.75rem;
    opacity: 0.8;
  }

  /* CTA Button with gaming aesthetic */
  .action-button {
    width: 100%;
    padding: 0.875rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
    outline: none;
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .action-button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .action-button:hover::after {
    opacity: 1;
    animation: button-shine 1.5s ease;
  }

  @keyframes button-shine {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }

  .standard-button {
    background: linear-gradient(to right, #10B981, #64FFDA);
    color: #0F172A;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
  }

  .standard-button:hover {
    box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
    transform: translateY(-2px);
  }

  .popular-button {
    background: linear-gradient(to right, #8B5CF6, #6366F1);
    color: white;
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }

  .popular-button:hover {
    box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
    transform: translateY(-2px);
  }

  .button-icon {
    width: 1rem;
    height: 1rem;
  }

  /* Additional info */
  .additional-info {
    text-align: center;
  }

  .users-count, .secure-payment {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #CBD5E1;
    font-size: 0.75rem;
    opacity: 0.7;
  }

  /* Slow pulse animation */
  .animate-pulse-slow {
    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.4;
    }
  }

  /* Responsive styles for different devices */
  @media (max-width: 768px) {
    .is-popular {
      transform: scale(1);
    }

    .is-popular:hover {
      transform: translateY(-6px) scale(1);
    }

    .card-header {
      padding: 1.25rem;
    }

    .features-container {
      padding: 1.25rem;
    }

    .plan-name {
      font-size: 1.25rem;
    }

    .price {
      font-size: 2rem;
    }

    .power-cards, .benefits-list {
      gap: 0.5rem;
    }
  }

  @media (max-width: 640px) {
    .power-card {
      padding: 0.625rem;
    }

    .power-icon {
      width: 1.75rem;
      height: 1.75rem;
    }

    .plan-icon {
      width: 2.5rem;
      height: 2.5rem;
    }

    .action-button {
      padding: 0.75rem;
    }
  }
  </style>
