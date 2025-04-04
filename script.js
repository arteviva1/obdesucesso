document.addEventListener("DOMContentLoaded", function () {

    // ============================================
    // 1. Seleção de Elementos
    // ============================================

    // Seleciona o elemento de perfil
    let profile = document.querySelector('.profile');

    // Seleciona todos os containers de vídeo
    let videoContainer = document.querySelectorAll('.video-container');

    // Seleciona o container de links
    let linksContainer = document.querySelector('.links');

    // ============================================
    // 2. Ajustes de Layout - Vídeo
    // ============================================

    // Ajusta a margem superior do primeiro vídeo
    if (videoContainer.length > 0) {
        videoContainer[0].style.marginTop = '10px';
    }

    // ============================================
    // 3. Efeito Hover nos Links
    // ============================================

    // Adiciona o efeito de hover aos links dentro do container '.links'
    if (linksContainer) {
        let links = linksContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.transform = 'scale(1.05)';
                link.style.boxShadow = '0 5px 25px rgba(0, 255, 128, 0.7)';
            });
            link.addEventListener('mouseout', () => {
                link.style.transform = 'scale(1)';
                link.style.boxShadow = '0 5px 15px rgba(0, 255, 128, 0.5)';
            });
        });
    }

    // ============================================
    // 4. Cálculo de Dias Desde Abertura
    // ============================================

    const dataAbertura = new Date("2025-04-04"); // Data inicial
    const hoje = new Date();
    const diffTime = hoje - dataAbertura;
    const diffDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const diasElement = document.getElementById("dias-abertos");
    if (diasElement) {
        diasElement.textContent = diffDias; // Exibe a quantidade de dias
    }

    // ============================================
    // 5. Exibição de Vagas Disponíveis
    // ============================================

    const vagasDisponiveis = 7; // Número de vagas disponíveis
    const vagasElement = document.getElementById("vagas-disponiveis");
    if (vagasElement) {
        vagasElement.textContent = vagasDisponiveis; // Exibe a quantidade de vagas
    }

});
