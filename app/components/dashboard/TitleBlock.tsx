import React from "react";

export const TitleBlock = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="w-full flex justify-between pb-6">
            <div>
                <span className="text-dark dark:text-gray-1000 text-2xl font-semibold leading-8">{title}</span>
                <div className="flex justify-content-center mt-1">
                    <span className="text-gray-400 font-medium text-lg">{subtitle}</span>
                </div>
            </div>
        </div>
    )
}   