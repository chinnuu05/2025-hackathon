import React from 'react';
import { Menu, Button, Group } from '@mantine/core';
import { IconDotsVertical, IconExternalLink, IconEdit, IconTrash } from '@tabler/icons-react';


export const ActionMenu = () => {
    return (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <span className="sr-only">Open dropdown menu</span>
            <IconDotsVertical size={22}></IconDotsVertical>
          </button>
        </Menu.Target>

        <Menu.Dropdown>

          <Menu.Label>Actions</Menu.Label>
          <Menu.Item
            // target="_blank"
            leftSection={<IconExternalLink size={17} />}
          >
            View Live
          </Menu.Item>
          <Menu.Item

            leftSection={<IconEdit size={18} />}
          >
            Edit in Notion
          </Menu.Item>
          <Menu.Item
            leftSection={<IconTrash className="text-red-500" size={18} />}
            >
            <span className="text-red-500">Delete</span>
          </Menu.Item>


          {/* <Menu.Item
            leftSection={<IconTarget size={16} />}
          >
            Set Active Popup
          </Menu.Item> */}
        </Menu.Dropdown>
      </Menu>
    );
  };