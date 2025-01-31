import React, { useContext } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { rem } from "@mantine/core";
import { Context } from "@reactivated";

export const ViewAllTableButton = () => {
    const context = useContext(Context);

    return (
        <td colSpan={4} className="bg-white transition-all duration-200 hover:bg-gray-50 border shadow-sm rounded-2xl border-mantine-border group px-6 py-4">
            <a href="#" className="w-full flex justify-between items-center">

                <div className="flex order-last text-gray-700 items-center space-x-2">
                    <div className="text-lg font-medium">
                        View full table on Notion
                    </div>
                    <IconArrowRight
                        className="transition-transform group-hover:translate-x-1"
                        style={{ width: rem(22), height: rem(22)}}
                    />
                </div>

                {/* Right side - Row count */}
                <div className="flex items-center space-x-2">
                    <div className=" text-lg text-gray-600 font-medium">
                        +18 more rows  
                    </div>

                    {/* <div>
                        <img style={{ width: rem(22), height: rem(22)}} src={`${context.STATIC_URL}assets/notion.svg`}></img>
                    </div> */}
                </div>
            </a>
        </td>
    )
}