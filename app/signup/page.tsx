"use client";

import { Avatar, Button, Stack, Rating, Divider, Checkbox, Anchor, Group, Text, TextInput, PasswordInput } from "@mantine/core";
// import MarketingLayout from "@/app/components/layouts/MarketingLayout";
import { useState } from "react";
import { useForm } from "@mantine/form"; 
import { GoogleButton } from "@/app/components/ui/GoogleButton";

import { Carousel } from "@mantine/carousel";
import { signIn } from "next-auth/react";
import { notifications } from "@mantine/notifications";

import AuthLayout from "@/app/components/layouts/AuthLayout";



export default function SignUpForm() {
    
    const [loading, setLoading] = useState(false); // Manage loading state


    const form = useForm({
        initialValues: {
          email: '',
          password: '',
        },
    
        validate: {
          email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
          password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
      });


    const handleSignUp = (values: any) => {

        console.log("Creating new account with values: " + JSON.stringify(values))

        fetch("http://localhost:8000/api/account/signup", {
            method: "POST",
            body: JSON.stringify({
                email: values.email, 
                password: values.password
            })
        })
        .then((response) => response.json())
        .then((data) => {

            if (!data.error) {

                if (data.status == "success") {
                    console.log(`Created user, logging in with ${values.email} and ${values.password}`)


                    setTimeout(() => {
                        setLoading(false);
                    }, 1000)

                    // Call NextAuth signIn() with /onboarding as redirect URI
                    signIn("credentials", {
                        username: values.email,
                        password: values.password,
                        redirect: true,
                        callbackUrl: "http://localhost:3000/dashboard/verify-email"
                    })

                }

                else {
                    console.log("Failed to create account: " + data.message);
                    setLoading(false);


                    if (data.message == "account_already_exists") {
                        
                        notifications.show({
                            color: "red",
                            title: "Account already exists",
                            message: "This user already exists, try logging in instead"
                        })

                    }

                    else {
                        notifications.show({
                            color: "red",
                            title: "Something went wrong",
                            message: "Please try again later"
                        })
                    }
                }
            }

            else {
                setLoading(false);

                console.log("Failed to create account: " + data.error);
                notifications.show({
                    color: "red",
                    title: "Something went wrong",
                    message: "Please try again later"
                })
            }
        }).catch((error) => {
            setLoading(false);

            notifications.show({
                color: "red",
                title: "Something went wrong",
                message: "Please try again later"
            })
        })




    }

    return (

        <AuthLayout>

            <div className="space-y-4 lg:space-y-6">

                <div className="space-y-4">
                    <div className="space-y-4">
                        <div>
                            <img className="w-10 h-10" src="assets/broom-logo.png"/>
                        </div>

                        <div>
                            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900">
                                Welcome to eBroom
                            </h1>
                        </div>
                    </div>

                    <div>
                        <span className="text-gray-600 font-medium">Clean up your email inbox in seconds</span>
                    </div>

                </div>

                <div className="space-y-4">
                    <div className="items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex">
                        <GoogleButton isSignUp={true} radius="md" size="lg" style={{width: "100%"}}>Sign up with Google</GoogleButton>
                    </div>


                    <div className="flex items-center">
                        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                        <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                            or
                        </div>
                        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                    </div>

                </div>

                <form onSubmit={form.onSubmit((values) => {

                    setLoading(true);
                    
                    console.log("Got sign up with values: " + JSON.stringify(values))

                    // Call SignUp endpoint
                    handleSignUp(values);
                })}>
                    <Stack>

                        <TextInput
                            withAsterisk
                            size="md"
                            label="Email"
                            placeholder="Your email address"
                            value={form.values.email}
                            error={form.errors.email && 'Please enter a valid email'}
                            radius="md"
                            {...form.getInputProps('email')}
                        />

                        <PasswordInput
                            withAsterisk
                            size="md"
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                            radius="md"
                        />

                    </Stack>

                    <div className="pt-7 flex flex-col space-y-4">

                        <Button type="submit" loading={loading} loaderProps={{type: 'dots'}} size="md" radius="lg" color="black" style={{width: '100%;'}} className="hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-white font-semibold text-center">
                            Sign up with email
                        </Button>

                        <div className="space-y-3.5">
                            <div className="px-2 justify-start">
                                <Anchor href="/login" c="dimmed" size="sm">
                                    Already have an account? Login
                                </Anchor>

                            </div>
                        </div>

                    </div>
                </form>

            </div>


        </AuthLayout>
        
    )

}