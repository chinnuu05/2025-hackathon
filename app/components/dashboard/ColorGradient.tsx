import React from 'react';
import { Radio, Text, CheckIcon } from '@mantine/core';


export function ColorGradient({ setActiveTheme, label, theme, isActive } : { setActiveTheme: any, label: string, theme: string, isActive: boolean }) {

    return (
        <div>
            <Radio 
                icon={CheckIcon}
                onClick={() => {
                    setActiveTheme(theme);
                }}
                value={theme} 
                id={theme} 
                name="blog-theme"
                className={`rounded-xl ${isActive ? "border-mantine-blue-5" : "border-mantine-border"} border-2 px-4 pt-6 pb-3`}
                styles={{
                    labelWrapper: {
                        width: '100%', // Set the label wrapper width to 100%
                      },
                }}
                label={
                    <button 
                        onClick={() => {
                            setActiveTheme(theme);
                        }}
                        className="w-full text-left"
                    >
                        <div className="flex flex-1 flex-col">
                            <div className="grid grid-cols-10 overflow-hidden rounded-xl border border-gray-200">
                                <div className={`h-16 bg-${theme}-50`} />
                                <div className={`h-16 bg-${theme}-100`} />
                                <div className={`h-16 bg-${theme}-200`} />
                                <div className={`h-16 bg-${theme}-300`} />
                                <div className={`h-16 bg-${theme}-400`} />
                                <div className={`h-16 bg-${theme}-500`} />
                                <div className={`h-16 bg-${theme}-600`} />
                                <div className={`h-16 bg-${theme}-700`} />
                                <div className={`h-16 bg-${theme}-800`} />
                                <div className={`h-16 bg-${theme}-900`} />
                            </div>
                        </div>
                        <div className="mt-3.5">
                            <Text size="md" fw={500}>{label}</Text>
                        </div>
                    </button>
                }
            />
        </div>
    );
}