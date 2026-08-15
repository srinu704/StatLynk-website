import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Arrow, PageHero, Shell } from '@/components/statlynk/shared';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.'),
  email: z.string().trim().email('Enter a valid work email address.'),
  company: z.string().trim(),
  phone: z.string().trim(),
  service: z.string().min(1, 'Please choose a service area.'),
  message: z.string().trim().min(1, 'Please tell us what you are trying to solve.'),
});

type ContactValues = z.infer<typeof contactSchema>;

const defaultValues: ContactValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
};

function buildMailto(values: ContactValues) {
  const body = [
    `Name: ${values.name}`,
    `Work Email: ${values.email}`,
    `Company: ${values.company || 'Not provided'}`,
    `Phone: ${values.phone || 'Not provided'}`,
    `Service Required: ${values.service}`,
    '',
    values.message,
  ].join('\n');
  return `mailto:info@statlynksolutions.com?subject=${encodeURIComponent(`StatLynk consultation request from ${values.name}`)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState<ContactValues | null>(null);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: 'onBlur',
  });

  function onSubmit(values: ContactValues) {
    setSubmitted(values);
  }

  return (
    <Shell meta={{ title: 'Contact | StatLynk Solutions', description: 'Start a thoughtful conversation with StatLynk Solutions about modernizing infrastructure, cybersecurity, automation, data or a new digital solution.' }}>
      <main>
        <PageHero kicker="Contact StatLynk" title="Let’s Solve Your Technology Challenge" copy="Whether you need to modernize your infrastructure, strengthen cybersecurity, automate business processes, analyze your data or build a new digital solution, let's discuss how StatLynk Solutions can help." />
        <section className="sl-section">
          <div className="sl-container sl-form-wrap">
            <div>
              <div className="sl-kicker">Start a conversation</div>
              <h2>Bring us the challenge.</h2>
              <p className="sl-copy">Share a little about what you are working through. A thoughtful first conversation can clarify the right next step.</p>
              <div style={{ marginTop: 30 }}>
                <div className="sl-kicker">Email</div>
                <a style={{ color: '#0f4c81', fontWeight: 700 }} href="mailto:info@statlynksolutions.com" data-testid="link-contact-email">info@statlynksolutions.com</a>
              </div>
            </div>
            <div className="sl-form">
              {submitted ? (
                <div className="sl-success" role="status" data-testid="status-contact-success">
                  <strong>Thank you for reaching out.</strong><br />
                  Your details are ready for the StatLynk team. This first-build form does not send to a server; use the link below to open your email client and send the request.
                  <br /><br />
                  <a href={buildMailto(submitted)} data-testid="link-contact-mailto-fallback">Open your email client to send your request</a>
                  <button type="button" className="sl-btn sl-btn-outline" style={{ marginTop: 18 }} onClick={() => { setSubmitted(null); form.reset(defaultValues); }} data-testid="button-contact-edit">Edit request</button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} aria-label="Request a consultation form" data-testid="form-contact">
                    <div className="sl-fields">
                      <FormField control={form.control} name="name" render={({ field, fieldState }) => (
                        <FormItem className="sl-field">
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <FormControl><input {...field} id="name" data-testid="input-contact-name" aria-invalid={fieldState.invalid} /></FormControl>
                          <FormMessage className="sl-field-error" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field, fieldState }) => (
                        <FormItem className="sl-field">
                          <FormLabel htmlFor="email">Work Email</FormLabel>
                          <FormControl><input {...field} id="email" type="email" data-testid="input-contact-email" aria-invalid={fieldState.invalid} /></FormControl>
                          <FormMessage className="sl-field-error" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem className="sl-field">
                          <FormLabel htmlFor="company">Company</FormLabel>
                          <FormControl><input {...field} id="company" data-testid="input-contact-company" /></FormControl>
                          <FormMessage className="sl-field-error" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem className="sl-field">
                          <FormLabel htmlFor="phone">Phone</FormLabel>
                          <FormControl><input {...field} id="phone" data-testid="input-contact-phone" /></FormControl>
                          <FormMessage className="sl-field-error" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="service" render={({ field, fieldState }) => (
                        <FormItem className="sl-field sl-field-full">
                          <FormLabel htmlFor="service">Service Required</FormLabel>
                          <FormControl>
                            <select {...field} id="service" data-testid="select-contact-service" aria-invalid={fieldState.invalid}>
                              <option value="" disabled>Select a service</option>
                              <option>AI Survey Solutions</option>
                              <option>Managed IT Support Services</option>
                              <option>Cybersecurity &amp; VAPT Services</option>
                              <option>Cloud &amp; DevOps</option>
                              <option>Data Analytics &amp; Business Intelligence</option>
                              <option>AI Automation &amp; Digital Transformation</option>
                              <option>Other technology challenge</option>
                            </select>
                          </FormControl>
                          <FormMessage className="sl-field-error" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field, fieldState }) => (
                        <FormItem className="sl-field sl-field-full">
                          <FormLabel htmlFor="message">Message</FormLabel>
                          <FormControl><textarea {...field} id="message" placeholder="Tell us what you are trying to solve." data-testid="textarea-contact-message" aria-invalid={fieldState.invalid} /></FormControl>
                          <FormMessage className="sl-field-error" />
                        </FormItem>
                      )} />
                    </div>
                    <button className="sl-btn sl-btn-primary" type="submit" style={{ marginTop: 20 }} data-testid="button-contact-submit">Request a Consultation <Arrow /></button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}