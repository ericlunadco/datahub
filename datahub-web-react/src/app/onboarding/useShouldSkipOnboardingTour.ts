// this key is used in commands.js to turn off onboarding tours in cypress tests
const SKIP_ONBOARDING_TOUR_KEY = 'skipOnboardingTour';

export default function useShouldSkipOnboardingTour() {
    // Always skip onboarding tours
    return true;
}
