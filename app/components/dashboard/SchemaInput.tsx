import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, rem } from "@mantine/core";
import { useDebouncedCallback } from 'use-debounce';

export function SchemaInput({ subDomain, blog_schema }: { subDomain?: string, blog_schema?: string }) {

    // Initialize the form
    const form = useForm({
        validateInputOnChange: true,
        initialValues: {
            schema: subDomain || '', // Start with subDomain or empty string
        },
    });

    const [value, setValue] = useState("feedback");

    // Validate the schema with debounce to improve performance
    const validateSchema = useDebouncedCallback((value: string) => {
        // Direct return if it's the blog's current schema or if it doesn't meet character criteria
        if (value === blog_schema || /[^a-zA-Z]/.test(value)) {
            form.setFieldError('schema', value === blog_schema ? null : 'No special characters or numbers allowed');
            return;
        }

        // Asynchronously check if the schema exists
        if (status === 'authenticated' && value) {
            // fetch(`http://localhost:8000/api/schema-exists?schema=${value}`, {
            //     headers: { Authorization: `Bearer ${(session as any)?.access}` },
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.exists && value !== blog_schema) {
            //         form.setFieldError('schema', 'This subdomain is already taken');
            //     } else {
            //         form.clearFieldError('schema');
            //     }
            // })
            // .catch(() => {
            //     // Optionally handle fetch error
            // });
        }
    }, 500);

    useEffect(() => {
        // Call the validation function whenever the schema field value changes
        validateSchema(form.values.schema);
    }, [form.values.schema]);

    // Effect for updating the form when subDomain changes, with checks to avoid unnecessary updates
    useEffect(() => {
        const currentFormValue = form.values.schema;
        if (subDomain && subDomain !== currentFormValue) {
            form.setFieldValue('schema', subDomain);
        }
    }, [subDomain]);

    return (
        <TextInput
            defaultValue={"feedback"}
            styles={{
                section: {
                    marginRight: rem(30),
                    marginLeft: rem(15),
                    fontWeight: 600,
                },
                input: {
                    paddingLeft: rem(75), // Adjust based on the visual width of the "https://" label
                    fontSize: rem(17),
                    fontFamily: "DM Sans",
                    color: "black",
                },
            }}
            className="w-full"
            label="Subdomain"
            withAsterisk
            size="lg"
            radius="md"
            leftSection="https://"
            rightSection=".supa.blog"
        />
    );
}