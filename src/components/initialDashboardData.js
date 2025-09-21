import React, { useState, useEffect } from 'react';
import { FaUser, FaPlus, FaSyncAlt, FaEllipsisV, FaClock, FaChevronDown, FaTimes, FaSearch } from 'react-icons/fa';

// Initial JSON data for dashboard
const initialDashboardData = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget-1',
          name: 'Cloud Accounts',
          text: 'Connected: 2\nNot Connected: 2'
        },
        {
          id: 'widget-2',
          name: 'Cloud Account Risk Assessment',
          text: 'Failed: 1689 (68%)\nWarning: 681 (27%)\nNot available: 36 (1%)\nPassed: 7253 (4%)'
        }
      ]
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'widget-3',
          name: 'Top 5 Namespace Specific Alerts',
          text: 'No Pie chart or Graph data available for this alert!'
        },
        {
          id: 'widget-4',
          name: 'Workload Alerts',
          text: 'No Pie chart or Graph data available for this alert!'
        }
      ]
    },
    {
      id: 'registry',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'widget-5',
          name: 'Image Risk Assessment',
          text: 'Total Vulnerabilities: 1470\nCritical: 9\nHigh: 150'
        },
        {
          id: 'widget-6',
          name: 'Image Security Issues',
          text: 'Critical: 2\nHigh: 2\nMedium: 2\nLow: 1'
        }
      ]
    }
  ]
};

export default initialDashboardData;