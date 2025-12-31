import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ai-robotic-textbook-on-Docusaurus/ur/docs',
    component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs', 'fe7'),
    routes: [
      {
        path: '/ai-robotic-textbook-on-Docusaurus/ur/docs',
        component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs', '86f'),
        routes: [
          {
            path: '/ai-robotic-textbook-on-Docusaurus/ur/docs',
            component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs', 'fa4'),
            routes: [
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/advanced-ai-control/module-5-advanced-ai',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/advanced-ai-control/module-5-advanced-ai', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/appendix/glossary',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/appendix/glossary', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/appendix/references',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/appendix/references', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/appendix/resources',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/appendix/resources', 'f6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/hardware-basics/module-3-hardware',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/hardware-basics/module-3-hardware', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/humanoid-design/module-6-humanoid-design',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/humanoid-design/module-6-humanoid-design', '75f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/intro',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/intro', 'd55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/introduction/intro',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/introduction/intro', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/ros2-foundations/module-1-ros2',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/ros2-foundations/module-1-ros2', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/ros2-foundations/ros2-hands-on',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/ros2-foundations/ros2-hands-on', '3f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/simulation/digital-twins',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/simulation/digital-twins', '457'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/simulation/gazebo-unity',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/simulation/gazebo-unity', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/simulation/module-2-simulation',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/simulation/module-2-simulation', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/module-4-vla-foundations',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/module-4-vla-foundations', '649'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-action',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-action', 'c8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-hands-on-basic',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-hands-on-basic', 'eed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-language',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-language', '25f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-vision',
                component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/docs/vla-systems/vla-vision', 'a29'),
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
    path: '/ai-robotic-textbook-on-Docusaurus/ur/',
    component: ComponentCreator('/ai-robotic-textbook-on-Docusaurus/ur/', '711'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
