import React from 'react';

interface Testimonial {
  rating: number;
  content: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      rating: 4,
      content: "Path GPS has been a second home for our child. The teachers are caring, and the facilities are exceptional. We've seen tremendous growth in our child's confidence and creativity!",
      author: {
        name: "Priya Sharma",
        role: "Parent of a Grade 3 Student",
        initials: "PS"
      }
    },
    {
      rating: 4,
      content: "The focus on both academics and extracurricular activities at Path GPS is amazing. Our child loves going to school every day!",
      author: {
        name: "Rajesh Kulkarni",
        role: "Product Manager",
        initials: "RK"
      }
    },
    {
      rating: 4,
      content: "Path GPS has exceeded our expectations. The innovative teaching methods and supportive environment have truly set our child up for success.",
      author: {
        name: "Neha Kapoor",
        role: "Parent of a Grade 5 Student",
        initials: "NK"
      }
    }
  ];

  // Component to render star rating
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}/5</span>
      </div>
    );
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Title Section */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-4">
            Testimonials That Speak Volumes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden flex flex-col"
            >
              {/* Testimonial Content */}
              <div className="p-6 flex-grow">
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
              </div>

              {/* Author Section */}
              <div className="bg-[#2B3B66] text-white p-6 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  {testimonial.author.initials}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;