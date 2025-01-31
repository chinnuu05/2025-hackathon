import {
    Avatar,
    Button,
    Stack,
    Rating,
    Divider,
    Checkbox,
    Anchor,
    Group,
    Text,
    TextInput,
    PasswordInput,
  } from "@mantine/core";
  import { Carousel } from "@mantine/carousel";
  import React, { useRef } from 'react';
  import Autoplay from 'embla-carousel-autoplay';
  
  import { Context } from "@reactivated";
//   import Footer from "@client/components/1111111marketing/Footer/Footer";
  
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  
      
      const context = React.useContext(Context);
      const autoplay = useRef(Autoplay({ delay: 2000 }));
  
      const testimonials = [
          {
              text: "Footprint helped me take back control of my personal data after years of being tracked!",
              rating: 5,
              name: "User One",
              company: "supablog.ai",
              thumbnail: "images/srk.png",
          },
          {
              text: "Digital privacy is a must and Footprint brings it all together in one place.",
              rating: 5,
              name: "Sai Krishna",
              company: "User Two",
              thumbnail: "assets/images/srk.png",
          },
          {
              text: "An absolute game changer for marketing and growing SEO",
              rating: 5,
              name: "Sai Krishan",
              company: "supablog.ai",
              thumbnail: "assets/images/srk.png",
          },
          {
              text: "An absolute game changer for marketing and growing SEO",
              rating: 5,
              name: "Sai Krishna",
              company: "supablog.ai",
              thumbnail: "assets/images/srk.png",
          },
          {
              text: "An absolute game changer for marketing and growing SEO",
              rating: 5,
              name: "Sai Krishna",
              company: "supablog.ai",
              thumbnail: "assets/images/srk.png",
          },
          {
              text: "An absolute game changer for marketing and growing SEO",
              rating: 4,
              name: "Sai Krishna",
              company: "supablog.ai",
              thumbnail: "assets/images/srk.png",
          },
          {
              text: "An absolute game changer for marketing and growing SEO",
              rating: 5,
              name: "Sai Krishna",
              company: "supablog.ai",
              thumbnail: "assets/images/srk.png",
          },
          {
              text: "An absolute game changer for marketing and growing SEO",
              rating: 5,
              name: "Sai Krishna",
              company: "supablog.ai",
              thumbnail: "assets/images/srk.png",
          },        
  
      ]
  
      return (
  
        <div className="h-screen overflow-hidden"> {/* Make sure the main div is full height and no overflow */}
          <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="py-8 px-8 lg:py-10 lg:px-36 md:px-14">
              {children}
            </div>
  
            <div className="hidden lg:block md:block w-full h-full bg-theme-color"> {/* Changed from bg-[#fbbf24] to a lighter purple */}
              <div className="px-10 h-full overflow-hidden">
                <div className="testimonial-carousel">
                  <Carousel
                    orientation="vertical"
                    loop
                    withControls={false}
                    height="100%"
                    slideSize="25%"
                    align="start"
                    draggable={false}
                    styles={{
                      viewport: { overflow: 'hidden' },
                      container: {
                        display: 'flex',
                        flexDirection: 'column',
                        animation: 'scroll 55s linear infinite',
                      },
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <Carousel.Slide key={index}>
                        <div className="bg-orange-400 shadow-xl border-2 border-gray-1200 drop-shadow-md shadow-lg space-y-6 rounded-3xl p-7 flex flex-col mt-10">
                          <div className="space-y-5">
                            {/* <Rating readOnly size="lg" defaultValue={5} color="#ea580c" /> */}
                            <Rating readOnly size="lg" defaultValue={testimonial.rating} color="#fd8a07" />
                            <div className="text-3xl font-bold text-white">
                                {testimonial.text}
                            </div>
                          </div>
  
                          <div className="flex justify-between items-center">
                            <div className="items-center flex space-x-4">
                              <Avatar
                                src={`${context.STATIC_URL}${testimonial.thumbnail}`}
                                size="lg"
                                radius="xl"
                              />
                              <div className="flex space-x-2.5 font-semibold text-2xl text-white">
                                <div>{testimonial.name}</div>
                                <div>•</div>
                                <div className="text-gray-100 font-medium">
                                  <a
                                    href="#"
                                    className="hover:underline hover:underline-offset-6"
                                  >
                                    {testimonial.company}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel.Slide>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      );
  }