// Initial JSON data for dashboard
// This data structure dynamically builds the dashboard with categories and widgets

const initialDashboardData = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget-1',
          name: 'Cloud Accounts',
          text: 'Total: 4 Cloud Accounts\n\nConnected (2):\n  • AWS Production\n  • Azure Development\n\nNot Connected (2):\n  • GCP Staging\n  • AWS Testing'
        },
        {
          id: 'widget-2',
          name: 'Cloud Account Risk Assessment',
          text: 'Total Resources Assessed: 9,659\n\nRisk Distribution:\n• Failed: 1,689 (68%)\n• Warning: 681 (27%)\n• Not Available: 36 (1%)\n• Passed: 7,253 (4%)\n\nCritical Issues: 234\nHigh Priority: 892\nLast Scan: 2 hours ago'
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
          text: 'Namespace Alert Distribution:\n\n1. kube-system: 145 alerts\n2. default: 89 alerts\n3. monitoring: 67 alerts\n4. production: 54 alerts\n5. ingress-nginx: 32 alerts\n\nTotal Active Alerts: 387\nCritical: 23 | High: 145 | Medium: 219'
        },
        {
          id: 'widget-4',
          name: 'Workload Alerts',
          text: 'Recent Workload Security Alerts:\n\n• High CPU Usage: 23 workloads affected\n• Memory Threshold Exceeded: 18 workloads\n• Suspicious Process Detected: 7 workloads\n• Unauthorized Access Attempts: 12 instances\n• Pod Security Violations: 15 instances\n\nLast Updated: 5 minutes ago'
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
          text: 'Total Images Scanned: 1,470\n\nVulnerability Distribution:\n• Critical: 9 images (0.6%)\n• High: 150 images (10.2%)\n• Medium: 487 images (33.1%)\n• Low: 824 images (56.1%)\n\nTotal Vulnerabilities Found: 2,847\nLast Full Scan: 15 minutes ago'
        },
        {
          id: 'widget-6',
          name: 'Image Security Issues',
          text: 'Security Issues by Severity:\n\n• Critical: 2 issues\n  (Immediate action required)\n• High: 2 issues\n  (Patches available)\n• Medium: 2 issues\n  (Scheduled for review)\n• Low: 1 issue\n  (Informational only)\n\nTotal Affected Images: 7\nCompliance Status: 94% passed'
        }
      ]
    }
  ]
};

export default initialDashboardData;