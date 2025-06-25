import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  contactMethod: 'email' | 'phone';
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data: ContactFormData = await request.json();
    
    const { 
      name, 
      email, 
      company, 
      phone, 
      projectType, 
      budget, 
      timeline, 
      description, 
      contactMethod 
    } = data;
    
    if (!name?.trim()) {
      return json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }
    
    if (!email?.trim()) {
      return json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    if (!description?.trim()) {
      return json(
        { error: 'Project description is required' },
        { status: 400 }
      );
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    if (contactMethod === 'phone' && !phone?.trim()) {
      return json(
        { error: 'Phone number is required when selecting phone contact method' },
        { status: 400 }
      );
    }
    
    data.id = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

    const response = await fetch('https://submit-form.com/DesdjYJLN', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return json({
        success: true,
        message: 'Your message has been sent successfully!'
      });
    } else {
      const errorData = await response.json().catch(() => ({}));
      console.error('External service error:', errorData);
      
      return json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }   
  } catch (error) {
    console.error('Contact API error:', error);
    
    return json(
      { 
        error: 'An unexpected error occurred. Please try again later.',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
};

export const GET: RequestHandler = async () => {
  return json({
    message: 'Contact API endpoint is working',
    methods: ['POST'],
    timestamp: new Date().toISOString()
  });
};
