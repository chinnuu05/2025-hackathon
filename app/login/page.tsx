"use client";

import Navbar from "@/app/components/marketing/Navbar";
import {
  Button,
  Stack,
  Divider,
  Checkbox,
  Anchor,
  Group,
  Text,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { GoogleButton } from "@/app/components/ui/GoogleButton";
import { notifications } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import AuthLayout from "@/app/components/layouts/AuthLayout";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();

  const [type, toggle] = useToggle(["login", "register"]);
  const [loading, setLoading] = useState(false); // Manage loading state
  const notificationShown = useRef(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  useEffect(() => {
    if (error && !notificationShown.current) {
      notificationShown.current = true;
      if (error == "account_already_exists") {
        notifications.show({
          color: "red",
          title: "Account already exists",
          message: "Try logging in with your email and password",
        });
      }
    }
  }, [error]);

  const handleLogin = (values: any) => {

    console.log(`Signing in with ${form.values.email} and ${form.values.password}`)
    signIn("credentials", {
      username: form.values.email,
      password: form.values.password,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);

        // Redirect to dashboard
        console.log("Signed in succesfully");

        router.push("/dashboard");
      } else {
        setLoading(false);

        console.log("fAield to signin");
        notifications.show({
          color: "red",
          title: "Couldn't sign in",
          message: "Invalid password or email",
        });
      }
    });
  };

  return (
    <AuthLayout>
      <div className="space-y-4 lg:space-y-6">

        <div className="space-y-2">
            <div className="space-y-5">
                <div>
                    <img className="w-12 h-12" src="assets/broom-logo.png"/>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900">
                        Welcome to eBroom
                    </h1>
                </div>
            </div>

            <div>
                <span className="text-gray-500 font-medium">Clean up your email inbox in seconds, get a more organized and productive inbox</span>
            </div>

        </div>

        <div className="space-y-4">

            <div className="items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex">
            <GoogleButton radius="md" size="lg" style={{ width: "100%" }}>
                Login with Google
            </GoogleButton>
            </div>

            <div className="flex items-center">
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />

            <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                or
            </div>

            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
            </div>

        </div>



        <form
          onSubmit={form.onSubmit((values) => {
            setLoading(true);

            handleLogin(values);
          })}
          method="POST"
          action="/api/auth/callback/credential"
        >
          <Stack>
            <TextInput
              required
              label="Email"
              name="Email"
              placeholder="Your email address"
              value={form.values.email}
              // onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && "Invalid email"}
              radius="md"
              size="md"
              {...form.getInputProps("email")}
            />

            <PasswordInput
              required
              label="Password"
              name="password"
              size="md"
              placeholder="Your password"
              value={form.values.password}
              // onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
              {...form.getInputProps("password")}
            />
          </Stack>

          <div className="pt-7 flex flex-col space-y-3">
            <Button
              type="submit"
              loading={loading}
              loaderProps={{ type: "dots" }}
              size="md"
              radius="lg"
              color="black"
              style={{ width: "100%;" }}
              className="hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-white font-semibold text-center"
            >
              Login with email
            </Button>

            <div className="space-y-3.5">
                <div className="px-2 justify-start">
                    <Anchor href="/signup" c="dimmed" size="sm">
                        Don't have an account? Sign up 
                    </Anchor>

                </div>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}