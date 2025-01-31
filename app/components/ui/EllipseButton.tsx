import React from "react";
import classes from "@/styles/EllipseButton.module.css";
import { ActionIcon, rem, Group, Menu, useMantineTheme } from '@mantine/core';
import { IconDotsVertical, IconPencil, IconPlus, IconTrash, IconCalendar, IconSettings } from '@tabler/icons-react';
import { notifications } from "@mantine/notifications";
// Takes in BlogID to perform CRUD actions
export function EllipseButton({ id, name, mutate } : { id: string, name: string, mutate: any }) {
    
    const useDeleteBlog = () => {
        // Your existing delete logic

    };
    
    return (
        <Group wrap="nowrap" gap={0}>
            <Menu transitionProps={{ transition: 'pop' }} position="top" withinPortal>

                <Menu.Target>
                    <ActionIcon size={42} color="grey" variant="transparent" aria-label="ActionIcon with size as a number">
                    <IconDotsVertical style={{ width: rem(26), height: rem(26) }} />
                    </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Item
                        onClick={() => {
                            // Call create-post endpoint and redirect to new post
                        }}
                        leftSection={
                        <IconPlus
                            style={{ width: rem(16), height: rem(16) }}
                            stroke={1.5}

                        />
                        }
                    >
                        New Post
                    </Menu.Item>
                    <Menu.Item component={'a'} href={`/dashboard/blog/${id}/settings`}
                        leftSection={
                        <IconSettings
                            style={{ width: rem(16), height: rem(16) }}
                            stroke={1.5}
                        />
                        }
                    >
                        Settings
                    </Menu.Item>
                    <Menu.Item
                        onClick={useDeleteBlog}
                        leftSection={
                        <IconTrash
                            style={{ width: rem(16), height: rem(16) }}
                            stroke={1.5}
                            color={"red"}
                        />
                        }
                    >
                        Delete
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>

  );
}