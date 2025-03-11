document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateResume').addEventListener('click',function(){
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());;
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;
        let markdown = `# ${name}\n`;
        markdown += `\n**Email:** ${email}\n`;
        markdown += `**Phone:** ${phone}\n`;
        markdown += `\n## Skills\n`;
        skills.forEach(skill => {
            markdown += `- ${skill}\n`;
        });
        markdown += `\n## Experience\n${experience}\n`;
        markdown += `\n## Education\n${education}\n`;
    
        document.getElementById('generatedMarkdown').value = markdown;
        const blob = new Blob([markdown],{type:'text/markdown'});
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download='resume.md';
        downloadLink.click();
    
    })
    })