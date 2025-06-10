'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { toast } from 'sonner';
import { Loader2, ArrowRight, ArrowLeft, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';

interface BookingFormData {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  projectDescription: string;
  selectedTopics: string[];
  selectedDate: Date | undefined;
  selectedTime: string;
}

const availableTimeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00'
];

const topics = [
  // Products
  { id: 'nvidia-dgx', label: 'NVIDIA DGX Systems', category: 'Products' },
  { id: 'nvidia-hgx', label: 'NVIDIA HGX Systems', category: 'Products' },
  { id: 'professional-services', label: 'Professional Services', category: 'Products' },
  { id: 'storage-systems', label: 'Storage Systems', category: 'Products' },
  { id: 'nvidia-ai-enterprise', label: 'NVIDIA AI Enterprise', category: 'Products' },

  // Solutions
  { id: 'ai-infrastructure', label: 'AI Infrastructure', category: 'Solutions' },
  { id: '3d-ai', label: '3D AI', category: 'Solutions' },
  { id: 'ai-consulting', label: 'AI Consulting', category: 'Solutions' },
  { id: 'robotics-edge-ai', label: 'Robotics & Edge AI', category: 'Solutions' },

  // Robotics & Edge AI Services
  { id: 'edge-ai', label: 'Edge AI', category: 'Robotics & Edge AI' },
  { id: 'vision-ai', label: 'Vision AI', category: 'Robotics & Edge AI' },

  // AI Consulting Services
  { id: 'conversational-ai', label: 'Conversational AI', category: 'AI Consulting' },
  { id: 'generative-ai', label: 'Generative AI', category: 'AI Consulting' },
  { id: 'ai-agents', label: 'AI Agents', category: 'AI Consulting' },
  { id: 'ai-data-platform', label: 'AI Data Platform', category: 'AI Consulting' },
  { id: 'machine-learning', label: 'Machine Learning', category: 'AI Consulting' },

  // 3D AI Services
  { id: 'design-visualization', label: 'Design Visualization', category: '3D AI' },
  { id: 'robotic-simulation', label: 'Robotic Simulation', category: '3D AI' },
  { id: 'extended-reality', label: 'Extended Reality', category: '3D AI' },
  { id: 'digital-twins', label: 'Digital Twins', category: '3D AI' },

  // AI Infrastructure Services
  { id: 'professional-services-infra', label: 'Professional Services', category: 'AI Infrastructure' },
  { id: 'ai-data-platform-infra', label: 'AI Data Platform', category: 'AI Infrastructure' },
  { id: 'mlops', label: 'MLOps', category: 'AI Infrastructure' },
  { id: 'accelerated-computing', label: 'Accelerated Computing', category: 'AI Infrastructure' },
  { id: 'virtualization', label: 'Virtualization', category: 'AI Infrastructure' },
  { id: 'sustainable-computing', label: 'Sustainable Computing', category: 'AI Infrastructure' }
];

// Group topics by category
const groupedTopics = topics.reduce((acc, topic) => {
  if (!acc[topic.category]) {
    acc[topic.category] = [];
  }
  acc[topic.category].push(topic);
  return acc;
}, {} as Record<string, typeof topics>);

export default function BookDiscoveryCall() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'discovery-call';
  const fromPage = searchParams.get('from') || '';

  const getHeadingText = () => {
    if (fromPage) {
      return fromPage;
    }
    switch (type) {
      case 'demo':
        return 'Schedule a Demo';
      case 'consultation':
        return 'Schedule a Consultation';
      default:
        return 'Book a Discovery Call';
    }
  };

  const getDescriptionText = () => {
    switch (type) {
      case 'demo':
        return 'Schedule a personalized demo with our experts to see our AI solutions in action and discover how they can transform your business.';
      case 'consultation':
        return 'Book a consultation with our experts to discuss your AI infrastructure needs and explore tailored solutions for your organization.';
      default:
        return 'Schedule a call with our experts to discuss your AI infrastructure needs and how we can help transform your business.';
    }
  };

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    projectDescription: '',
    selectedTopics: [],
    selectedDate: undefined,
    selectedTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTopicToggle = (topicId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTopics: prev.selectedTopics.includes(topicId)
        ? prev.selectedTopics.filter(id => id !== topicId)
        : [...prev.selectedTopics, topicId]
    }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      selectedDate: date
    }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTime: time
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual booking logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(`Your ${type === 'demo' ? 'demo' : type === 'consultation' ? 'consultation' : 'discovery call'} has been scheduled! You will receive a confirmation email shortly.`);
      // Reset form and go back to step 1
      setFormData({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        projectDescription: '',
        selectedTopics: [],
        selectedDate: undefined,
        selectedTime: '',
      });
      setStep(1);
    } catch (error) {
      toast.error('There was an error scheduling your call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceedToStep2 = formData.name && formData.email && formData.company && formData.jobTitle;
  const canProceedToStep3 = formData.projectDescription && formData.selectedTopics.length > 0;
  const canSubmit = formData.selectedDate && formData.selectedTime;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{getHeadingText()}</h1>
          <p className="text-lg text-gray-600">
            {getDescriptionText()}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex-1">
                <div
                  className={`h-2 ${
                    stepNumber < step
                      ? 'bg-accent-green'
                      : stepNumber === step
                      ? 'bg-accent-green/60'
                      : 'bg-gray-200'
                  } transition-all duration-300`}
                />
                <div className="mt-2 text-sm text-gray-600 text-center">
                  {stepNumber === 1 ? 'Basic Info' : stepNumber === 2 ? 'Project Details' : 'Schedule'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-green focus:ring-accent-green"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-green focus:ring-accent-green"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-green focus:ring-accent-green"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-green focus:ring-accent-green"
                  />
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceedToStep2}
                  className="w-full flex justify-center items-center py-3 px-4 text-charcoal bg-accent-green hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                    Tell us about your project and what you'd like to discuss *
                  </label>
                  <textarea
                    name="projectDescription"
                    id="projectDescription"
                    required
                    rows={6}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Please include any specific areas you'd like to discuss, current challenges, and your goals."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-green focus:ring-accent-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Topics of Interest *
                  </label>
                  {Object.entries(groupedTopics).map(([category, categoryTopics]) => (
                    <div key={category} className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">{category}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryTopics.map((topic) => (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => handleTopicToggle(topic.id)}
                            className={`p-3 rounded-lg text-sm text-left transition-all duration-300 ${
                              formData.selectedTopics.includes(topic.id)
                                ? 'bg-accent-green text-charcoal'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {topic.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {formData.selectedTopics.length === 0 && (
                    <p className="mt-2 text-sm text-gray-500">Please select at least one topic</p>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 flex justify-center items-center py-3 px-4 border border-accent-green text-accent-green hover:bg-accent-green hover:text-white transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!canProceedToStep3}
                    className="flex-1 flex justify-center items-center py-3 px-4 text-charcoal bg-accent-green hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select a Date and Time for Your Call *
                  </label>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Calendar
                        mode="single"
                        selected={formData.selectedDate}
                        onSelect={handleDateSelect}
                        className="rounded-md border"
                        disabled={(date) => 
                          date < new Date() || // Past dates
                          date.getDay() === 0 || // Sunday
                          date.getDay() === 6    // Saturday
                        }
                      />
                    </div>
                    <div>
                      <div className="grid grid-cols-2 gap-2">
                        {availableTimeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant="outline"
                            onClick={() => handleTimeSelect(time)}
                            className={`${
                              formData.selectedTime === time
                                ? 'bg-accent-green text-charcoal border-accent-green'
                                : 'border-gray-300 text-gray-700 hover:border-accent-green'
                            }`}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 flex justify-center items-center py-3 px-4 border border-accent-green text-accent-green hover:bg-accent-green hover:text-white transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="flex-1 flex justify-center items-center py-3 px-4 text-charcoal bg-accent-green hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Scheduling...
                      </>
                    ) : (
                      <>
                        Schedule Call
                        <CalendarIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
} 