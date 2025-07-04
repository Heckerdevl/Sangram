import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    events: []
  });
  const { toast } = useToast();

  const events = [
    'Football', 'Hockey', 'Cricket', 'Athletics', 'Badminton',
    'Basketball', 'Table Tennis', 'Volleyball', 'Taekwondo',
    'Weight-lifting', 'Chess', 'Squash', 'E-Sports', 'Swimming', 'Lawn Tennis'
  ];

  const handleEventChange = (event) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter(e => e !== event)
        : [...prev.events, event]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.college || formData.events.length === 0) {
      toast({
        title: "Error",
        description: "Please fill all fields and select at least one event.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "Your registration has been submitted successfully."
    });

    setFormData({ name: '', email: '', college: '', events: [] });
  };

  return (
    <div className="min-h-screen bg-[url('/assets/one.png')] bg-cover bg-center pt-16">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-6">
            Join the Action
          </h1>
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-90 mb-4">
            Register for Sangram 2025
          </h2>
          <p className="text-xl bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent opacity-80 max-w-3xl mx-auto">
            Be part of India's most prestigious sports festival
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 ">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-l from-yellow-400 opacity-80 to-yellow-600 rounded-lg shadow-lg p-8 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className='text-white' >
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div className='text-white'>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email address"
                  className="mt-1"
                />
              </div>

              <div className='text-white'>
                <Label htmlFor="college">College/Institution *</Label>
                <Input
                  id="college"
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData(prev => ({ ...prev, college: e.target.value }))}
                  placeholder="Enter your college name"
                  className="mt-1"
                />
              </div>

              <div className='text-white'>
                <Label>Events Interested In * (Select multiple)</Label>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                  {events.map((event) => (
                    <label key={event} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.events.includes(event)}
                        onChange={() => handleEventChange(event)}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700">{event}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-l from-white to-yellow-400 text-black py-3 text-lg font-semibold"
              >
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
