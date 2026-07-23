export type PeopleLabFunnelStage =
  | 'SIGNAL'
  | 'SITUATION'
  | 'REFRAME'
  | 'FIT'
  | 'CONVERSION'
  | 'QUALIFICATION'
  | 'SCOPE'
  | 'DELIVERY'
  | 'EXPANSION';

export type PeopleLabEventName =
  | 'cta_click'
  | 'form_start'
  | 'form_selection'
  | 'form_submit'
  | 'form_error';

export type PeopleLabEventParameters = {
  cta_id?: string;
  cta_text?: string;
  form_id?: string;
  form_name?: string;
  form_status?: string;
  conversion_type?: string;
  product?: string;
  strategic_situation?: string;
  funnel_stage?: PeopleLabFunnelStage;
  language?: 'DA' | 'EN';
  page_path?: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPeopleLabEvent(
  eventName: PeopleLabEventName,
  parameters: PeopleLabEventParameters = {}
): void {
  if (
    typeof window === 'undefined' ||
    typeof window.gtag !== 'function'
  ) {
    return;
  }

  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== ''
    )
  );

  window.gtag('event', eventName, {
    event_source: 'peoplelab_web',
    tracking_version: '1.0',
    ...cleanParameters,
  });
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, any> = {}
): void {
  trackPeopleLabEvent(eventName as PeopleLabEventName, parameters as PeopleLabEventParameters);
}

export {};
