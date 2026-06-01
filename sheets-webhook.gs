/**
 * Swell Realty — Questionnaire Webhook
 *
 * HOW TO DEPLOY (3 steps):
 * 1. Open the Google Sheet "Swell Realty — Questionnaire Responses" in your Drive
 * 2. Extensions → Apps Script → paste this entire file, replacing all existing code
 * 3. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    → Click Deploy → copy the Web App URL
 * 4. Run this in your terminal:
 *    cd C:\Claude\swell-realty
 *    echo "PASTE_URL_HERE" | npx vercel env add WEBHOOK_URL production
 *    npx vercel --prod
 */

const SHEET_ID = '1yKOHkwwMsU3YTwEo7oiQrwvfsluZIpENQzzM558ja34';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    const row = [
      data.submittedAt || '',
      data.answers.legal_name || '',
      data.answers.preferred_name || '',
      data.answers.entity_relationship || '',
      data.answers.mls_memberships || '',
      data.answers.nar_member || '',
      Array.isArray(data.answers.designations) ? data.answers.designations.join(', ') : (data.answers.designations || ''),
      data.answers.years_in_re || '',
      data.answers.contact_email || '',
      data.answers.contact_phone || '',
      data.answers.contact_per_state || '',
      data.answers.three_words || '',
      data.answers.tagline || '',
      data.answers.voice_formal || '',
      data.answers.voice_polished || '',
      data.answers.voice_expert || '',
      data.answers.voice_witty || '',
      data.answers.voice_local || '',
      data.answers.origin_story || '',
      data.answers.differentiator || '',
      data.answers.ideal_client || '',
      data.answers.bad_client || '',
      data.answers.proudest_moment || '',
      Array.isArray(data.answers.era) ? data.answers.era.join(', ') : (data.answers.era || ''),
      data.answers.color_palette || '',
      data.answers.favorite_colors_detail || '',
      data.answers.colors_hate || '',
      Array.isArray(data.answers.typography) ? data.answers.typography.join(', ') : (data.answers.typography || ''),
      Array.isArray(data.answers.textures) ? data.answers.textures.join(', ') : (data.answers.textures || ''),
      data.answers.logo_direction || '',
      data.answers.logo_status || '',
      data.answers.logo_inspiration || '',
      data.answers.refs_love || '',
      data.answers.refs_hate || '',
      data.answers.moodboard || '',
      data.answers.vintage_examples || '',
      data.answers.animation || '',
      data.answers.nc_areas || '',
      data.answers.va_areas || '',
      data.answers.home_base || '',
      Array.isArray(data.answers.property_types) ? data.answers.property_types.join(', ') : (data.answers.property_types || ''),
      data.answers.price_range || '',
      data.answers.niche || '',
      Array.isArray(data.answers.services_offered) ? data.answers.services_offered.join(', ') : (data.answers.services_offered || ''),
      data.answers.services_unique || '',
      data.answers.client_process || '',
      data.answers.site_scope || '',
      Array.isArray(data.answers.pages_wanted) ? data.answers.pages_wanted.join(', ') : (data.answers.pages_wanted || ''),
      data.answers.must_hit_page || '',
      data.answers.first_action || '',
      data.answers.idx_wanted || '',
      data.answers.idx_provider || '',
      data.answers.featured_listings || '',
      data.answers.saved_searches || '',
      data.answers.sold_gallery || '',
      data.answers.leads_current || '',
      data.answers.leads_destination || '',
      data.answers.form_fields || '',
      data.answers.chat_widget || '',
      data.answers.scheduler || '',
      Array.isArray(data.answers.lead_magnets) ? data.answers.lead_magnets.join(', ') : (data.answers.lead_magnets || ''),
      data.answers.newsletter || '',
      data.answers.nc_disclosures || '',
      data.answers.va_disclosures || '',
      data.answers.footer_logos || '',
      data.answers.brokerage_requirements || '',
      data.answers.privacy_policy || '',
      data.answers.ada || '',
      data.answers.social_instagram || '',
      data.answers.social_facebook || '',
      data.answers.social_tiktok || '',
      data.answers.social_linkedin || '',
      data.answers.social_youtube || '',
      data.answers.social_pinterest || '',
      data.answers.social_other || '',
      data.answers.zillow || '',
      data.answers.realtordotcom || '',
      data.answers.homesdotcom || '',
      data.answers.google_business || '',
      data.answers.yelp || '',
      data.answers.reviews_best_platform || '',
      data.answers.reviews_display || '',
      data.answers.testimonials || '',
      data.answers.video_testimonials || '',
      data.answers.press_awards || '',
      data.answers.stats || '',
      data.answers.headshot || '',
      data.answers.headshot_direction || '',
      data.answers.lifestyle_photos || '',
      data.answers.market_photos || '',
      data.answers.listing_photo_rights || '',
      data.answers.logo_files || '',
      data.answers.bio || '',
      data.answers.domain_existing || '',
      data.answers.domain_dream || '',
      data.answers.domain_email || '',
      data.answers.existing_website || '',
      data.answers.hosting || '',
      data.answers.monthly_budget || '',
      data.answers.analytics || '',
      data.answers.crm || '',
      data.answers.seo || '',
      data.answers.launch_date || '',
      data.answers.hard_deadline || '',
      data.answers.mvp || '',
      data.answers.phase_2 || '',
      data.answers.copy_writer || '',
      data.answers.anything_else || '',
      data.answers.tried_before || '',
      data.answers.success_definition || '',
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Swell Realty webhook is live.')
    .setMimeType(ContentService.MimeType.TEXT);
}
