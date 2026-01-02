import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ai-robotic-textbook-on-Docusaurus/ur/',
    component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/', '711'),
    exact: true
  },
  {
    path: '/ai-robotic-textbook-on-Docusaurus/ur/',
    component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/', 'f7b'),
    routes: [
      {
        path: '/ai-robotic-textbook-on-Docusaurus/ur/',
        component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/', '8ac'),
        routes: [
          {
            path: '/ai-robotic-textbook-on-Docusaurus/ur/',
            component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/', '518'),
            routes: [
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/advanced-ai-control/module-5-advanced-ai',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/advanced-ai-control/module-5-advanced-ai', '858'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/appendix/glossary',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/appendix/glossary', 'c45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/appendix/references',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/appendix/references', '4e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/appendix/resources',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/appendix/resources', '17f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/hardware-basics/module-3-hardware',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/hardware-basics/module-3-hardware', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/humanoid-design/module-6-humanoid-design',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/humanoid-design/module-6-humanoid-design', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/intro',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/intro', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/introduction/intro',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/introduction/intro', 'e10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/ros2-foundations/module-1-ros2',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/ros2-foundations/module-1-ros2', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/ros2-foundations/ros2-hands-on',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/ros2-foundations/ros2-hands-on', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/simulation/digital-twins',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/simulation/digital-twins', '306'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/simulation/gazebo-unity',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/simulation/gazebo-unity', '092'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/simulation/module-2-simulation',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/simulation/module-2-simulation', '87d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/module-4-vla-foundations',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/module-4-vla-foundations', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-action',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-action', '835'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-hands-on-basic',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-hands-on-basic', 'd4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-language',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-language', '125'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-vision',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/vla-systems/vla-vision', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
