import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function generatePDF(elementId: string): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('爱情测试分析报告.pdf');
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    throw error;
  }
}

export async function shareReport(data: any): Promise<string> {
  try {
    // 这里可以调用后端API来生成分享链接
    const response = await fetch('/api/share-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to generate share link');
    }

    const { shareUrl } = await response.json();
    return shareUrl;
  } catch (error) {
    console.error('Failed to share report:', error);
    throw error;
  }
} 