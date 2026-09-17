/**
 * Utilidad de Generación Dinámica de Currículum en PDF (jsPDF)
 *
 * Genera y descarga un currículum profesional en formato A4 con tipografía cuidada,
 * estructura ATS-friendly (compatible con sistemas de seguimiento de candidatos),
 * secciones de contacto, experiencia, educación y habilidades técnicas en español o inglés.
 */
import {
  type Language,
  PERSONAL_INFO_EN,
  PERSONAL_INFO_ES,
  WORK_EXPERIENCE_EN,
  WORK_EXPERIENCE_ES,
  EDUCATION_EN,
  EDUCATION_ES,
  SKILL_CATEGORIES_EN,
  SKILL_CATEGORIES_ES,
} from '~/i18n/translations';

export async function generateResumePDF(lang: Language = 'en'): Promise<void> {
  const { default: jsPDF } = await import('jspdf');
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const isSpanish = lang === 'es';
  const personalInfo = isSpanish ? PERSONAL_INFO_ES : PERSONAL_INFO_EN;
  const workExperience = isSpanish ? WORK_EXPERIENCE_ES : WORK_EXPERIENCE_EN;
  const education = isSpanish ? EDUCATION_ES : EDUCATION_EN;
  const skillCategories = isSpanish ? SKILL_CATEGORIES_ES : SKILL_CATEGORIES_EN;

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  // Header Colors (Royal Blue & Neutral Slate)
  const primaryColor: [number, number, number] = [29, 78, 216]; // Royal Blue #1d4ed8
  const darkSlate: [number, number, number] = [15, 23, 42]; // Slate 900
  const midSlate: [number, number, number] = [71, 85, 105]; // Slate 600

  // 1. Candidate Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(personalInfo.name.toUpperCase(), margin, y);
  y += 7;

  // 2. Candidate Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.text(personalInfo.title, margin, y);
  y += 5;

  // 3. Contact Details Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(midSlate[0], midSlate[1], midSlate[2]);
  const contactText = `${personalInfo.email}   •   jesusortega.xyz   •   github.com/Jesus-Ort   •   linkedin.com/in/jesusortegasq   •   ${personalInfo.location}`;
  const contactLines = doc.splitTextToSize(contactText, contentWidth);
  doc.text(contactLines, margin, y);
  y += contactLines.length * 4.0 + 1.5;

  // Horizontal separator rule in Royal Blue
  doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setLineWidth(0.6);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5.5;

  // Helper function for section headings
  const addSectionHeader = (title: string) => {
    if (y > 265) {
      doc.addPage();
      y = 18;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 4.5;
  };

  // 4. Professional Summary
  const summaryTitle = isSpanish ? 'Resumen Profesional' : 'Professional Summary';
  addSectionHeader(summaryTitle);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);

  const summaryContent = isSpanish
    ? "Desarrollador Web Full-Stack Junior e Ingeniero en Informática con sólida base en arquitecturas web modernas, desarrollo basado en componentes y sistemas de bases de datos. Especializado en la creación de aplicaciones web responsivas y escalables utilizando Vue.js, Nuxt (incluyendo Nuxt 4), Node.js, Express y Supabase (PostgreSQL)."
    : "Junior Full-Stack Web Developer and Computer Engineer with a solid foundation in modern web architectures, component-driven development, and database systems. Specialized in engineering responsive, scalable web applications utilizing Vue.js, Nuxt (including Nuxt 4), Node.js, Express, and Supabase (PostgreSQL).";

  const summaryLines = doc.splitTextToSize(summaryContent, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.0 + 3;

  // 5. Technical Core Competencies
  const skillsTitle = isSpanish ? 'Habilidades Técnicas y Competencias' : 'Technical Skills & Expertise';
  addSectionHeader(skillsTitle);
  doc.setFontSize(8.5);

  const skillLines = skillCategories.map((cat) => ({
    label: `${cat.category}:`,
    value: cat.skills.map((s) => s.name).join(', ')
  }));

  skillLines.forEach(item => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);
    doc.text(item.label, margin, y);
    const labelWidth = doc.getTextWidth(item.label) + 2;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(midSlate[0], midSlate[1], midSlate[2]);
    const maxValWidth = contentWidth - labelWidth;
    const wrappedValue = doc.splitTextToSize(item.value, maxValWidth);
    doc.text(wrappedValue, margin + labelWidth, y);
    y += wrappedValue.length * 3.8 + 1.0;
  });
  y += 2;

  // 6. Professional Experience
  const expTitle = isSpanish ? 'Experiencia Laboral Profesional' : 'Professional Experience';
  addSectionHeader(expTitle);

  workExperience.forEach((job) => {
    if (y > 252) {
      doc.addPage();
      y = 18;
    }

    // Role & Date
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const periodWidth = doc.getTextWidth(job.period);
    doc.text(job.period, pageWidth - margin - periodWidth, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.8);
    doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);
    const maxRoleWidth = contentWidth - periodWidth - 4;
    const roleLines = doc.splitTextToSize(job.role, maxRoleWidth);
    doc.text(roleLines, margin, y);
    y += roleLines.length * 4.0;

    // Company & Location
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.8);
    doc.setTextColor(midSlate[0], midSlate[1], midSlate[2]);
    const compLocation = `${job.company}  •  ${job.location}`;
    const compLines = doc.splitTextToSize(compLocation, contentWidth);
    doc.text(compLines, margin, y);
    y += compLines.length * 3.8 + 0.8;

    // Description bullets
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.4);
    doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);

    const bulletIndent = 4.5;
    const bulletTextWidth = contentWidth - bulletIndent;

    job.description.forEach(bullet => {
      const bulletLines = doc.splitTextToSize(bullet, bulletTextWidth);
      doc.text("•", margin + 0.5, y);
      doc.text(bulletLines, margin + bulletIndent, y);
      y += bulletLines.length * 3.6 + 1.0;
    });

    y += 2.0;
  });

  // 7. Education
  const eduTitle = isSpanish ? 'Educación y Credenciales' : 'Education & Credentials';
  addSectionHeader(eduTitle);
  education.forEach(edu => {
    if (y > 268) {
      doc.addPage();
      y = 18;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const yrWidth = doc.getTextWidth(edu.year);
    doc.text(edu.year, pageWidth - margin - yrWidth, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);
    const maxDegreeWidth = contentWidth - yrWidth - 4;
    const degreeLines = doc.splitTextToSize(edu.degree, maxDegreeWidth);
    doc.text(degreeLines, margin, y);
    y += degreeLines.length * 4.0;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.4);
    doc.setTextColor(midSlate[0], midSlate[1], midSlate[2]);
    const highlightsLabel = isSpanish ? 'Temas Destacados:' : 'Relevant:';
    const eduDetail = `${edu.school}  •  ${highlightsLabel} ${edu.highlights.join(', ')}`;
    const wrappedEdu = doc.splitTextToSize(eduDetail, contentWidth);
    doc.text(wrappedEdu, margin, y);
    y += wrappedEdu.length * 3.7 + 2;
  });

  // Footer separator & centered text
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.3);
  doc.line(margin, 283, pageWidth - margin, 283);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184); // slate-400
  const footerText = isSpanish
    ? `Jesús Ortega  •  Curriculum Vitae  •  ${personalInfo.email}  •  github.com/Jesus-Ort`
    : `Jesus Ortega  •  Curriculum Vitae  •  ${personalInfo.email}  •  github.com/Jesus-Ort`;
  doc.text(footerText, pageWidth / 2, 288, { align: 'center' });

  // Save / Trigger Download with localized filename
  const filename = isSpanish ? 'Jesus_Ortega_Curriculum_Vitae.pdf' : 'Jesus_Ortega_Resume.pdf';
  doc.save(filename);
}
