function loadDefaultContent() {
    const sobreMimHTML = `
    <div class="sobre-mim" id="sobre-mim"> 
        <div class="position">
            <h2 class="">Sobre mim</h2>
            <div class="barra"></div>
        </div>
        <div class="container">
            <p class="mt-4">
                Olá! Sou o Cristian, aos 22 anos, focado e apaixonado pelo desenvolvimento front-end. Tenho uma abordagem meticulosa ao transformar conceitos em designs web envolventes. Com um olhar atento às tendências, estou sempre pronto para colaborar e elevar projetos ao próximo nível. Estou à disposição para contribuir e inovar.
            </p>
            <p>
                Gosto de me manter atualizado e aprender novas tecnologias e habilidades. Por isso, frequentemente realizo cursos online para expandir meu conhecimento.
            </p>

            <div> 
                <h3 class="mt-4">Skills</h3> 
                <div class="barra mb-3"></div>
                <div class="row ms-2"> 
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-brands fa-github fa-2xl mt-4 ms-3" style="color: rgb(255, 185, 56);"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5> Git e Open Source</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start">Tenho experiência em utilizar a linha de comando, Git e GitHub. Além disso, contribuí com documentação e código para projetos open source.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-regular fa-lightbulb fa-2xl mt-4 ms-3" style="color: rgb(255, 185, 56);" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5>Aprendizado Continuo</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start">Gosto de me manter atualizado e aprender novas tecnologias e habilidades. Por isso, frequentemente realizo cursos online para expandir meu conhecimento.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-solid fa-plane fa-2xl mt-4 ms-3" style="color: rgb(255, 185, 56);" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5>Conhecimento em Linguas.</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start">Habilidade intermediária em inglês, com prática em leitura e oratória. Interessado em viagens internacionais a trabalho.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-solid fa-diagram-project fa-2xl mt-4 ms-3"  style="color: rgb(255, 185, 56);"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5>Gestão de projetos</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start" style="font-size: 13px;">Como desenvolvedor web, tenho experiência em gerenciamento de projetos por meio de atividades freelancer, onde crio e administro projetos para clientes, garantindo qualidade e prazos.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    `;
    document.getElementById('conteudo').innerHTML = sobreMimHTML;
}

// Função para alternar entre as seções
function loadContent(contentHTML) {
    document.getElementById('conteudo').innerHTML = contentHTML;
}

// Adiciona eventos para as seções
document.getElementById('sobre-script').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadContent(`
        <div class="sobre-mim" id="sobre-mim"> 
        <div class="position">
            <h2 class="">Sobre mim</h2>
            <div class="barra"></div>
        </div>
        <div class="container">
            <p class="mt-4">
                Olá! Sou o Cristian, aos 22 anos, focado e apaixonado pelo desenvolvimento front-end. Tenho uma abordagem meticulosa ao transformar conceitos em designs web envolventes. Com um olhar atento às tendências, estou sempre pronto para colaborar e elevar projetos ao próximo nível. Estou à disposição para contribuir e inovar.
            </p>
            <p>
                Gosto de me manter atualizado e aprender novas tecnologias e habilidades. Por isso, frequentemente realizo cursos online para expandir meu conhecimento.
            </p>

            <div> 
                <h3 class="mt-4">Skills</h3> 
                <div class="barra mb-3"></div>
                <div class="row ms-2"> 
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-brands fa-github fa-2xl mt-4 ms-3" style="color: rgb(255, 185, 56);"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5> Git e Open Source</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start">Tenho experiência em utilizar a linha de comando, Git e GitHub. Além disso, contribuí com documentação e código para projetos open source.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-regular fa-lightbulb fa-2xl mt-4 ms-3" style="color: rgb(255, 185, 56);" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5>Aprendizado Continuo</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start">Gosto de me manter atualizado e aprender novas tecnologias e habilidades. Por isso, frequentemente realizo cursos online para expandir meu conhecimento.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-solid fa-plane fa-2xl mt-4 ms-3" style="color: rgb(255, 185, 56);" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5>Conhecimento em Linguas.</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start">Habilidade intermediária em inglês, com prática em leitura e oratória. Interessado em viagens internacionais a trabalho.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bloco-perfil">
                            <div class="card habilidades">
                                <div class="card-body">
                                    <div class="row d-flex">
                                        <div class="col-2">
                                            <i class="fa-solid fa-diagram-project fa-2xl mt-4 ms-3"  style="color: rgb(255, 185, 56);"></i>
                                        </div>
                                        <div class="col-9">
                                            <h5>Gestão de projetos</h5>
                                        </div>
                                        <div class="col-9 offset-md-2">
                                            <p class="text-start" style="font-size: 13px;">Como desenvolvedor web, tenho experiência em gerenciamento de projetos por meio de atividades freelancer, onde crio e administro projetos para clientes, garantindo qualidade e prazos.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    `);
});

document.getElementById('resumo-script').addEventListener('click', function(event) {
    event.preventDefault(); 
    const resumoExHTML = `
    <div class="sobre-mim" id="sobre-mim"> 
                                    <div class="position">
                                        <h2 class="">Resumo e experiências</h2>
                                        <div class="barra"></div>
                                    </div>
                                <div class="container">

                                    <div>
                                        <div class="resumo-title">
                                            <div class="icone-ex"><i class="fa-solid fa-book fa-lg" style="color: #FFD43B;"></i></div>
                                            <h4>Educação</h4>
                                        </div>
                                        <div class="timeline">
                                            <div class="timeline-item">
                                                <div class="box">
                                                    <h5>Graduação na faculdade Estácio</h5>
                                                    <span class="date">Inicio: Março/2024 - Finalização: Junho/2026</span>
                                                    <p> Ensino Superior em Análise e desenvolvimento de sistemas </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                <div>
                                    <div class="resumo-title">
                                        <div class="icone-ex"><i class="fa-solid fa-briefcase fa-lg" style="color: #FFD43B;"></i></div>
                                        <h4>Experiência</h4>
                                    </div>
                                    <div class="timeline">
                                        <div class="timeline-item">
                                            <div class="box">
                                                <h5>Analista de Integrações de Sistemas - PayPal</h5>
                                                <span class="date">Março/2022 - Atualmente</span>
                                                <p>Realizei testes de integração em sites para assegurar a funcionalidade correta das APIs,
                                                    identificando e resolvendo problemas técnicos durante o processo. Prestei suporte técnico direto a
                                                    usuários finais e equipes de desenvolvimento na implementação e solução de problemas
                                                    relacionados às APIs, garantindo a integração suave com diversas plataformas.</p>
                                            </div>
                                        </div>
                                    
                                        <div class="timeline-item">
                                            <div class="box">
                                                <h5>Operador de Telemarketing Ativo e Receptivo</h5>
                                                <span class="date">Junho/2020 - Maço/2022</span>
                                                <p>Atendimento ao cliente via telefone e canais digitais, prestando suporte técnico N1. Responsável por
                                                    diagnosticar problemas básicos, oferecer soluções rápidas e encaminhar incidentes para níveis
                                                    superiores, mantendo a satisfação do cliente. Boa comunicação e foco em resolução ágil.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                                </div>
    `;
    loadContent(resumoExHTML);
});

document.getElementById('port-script').addEventListener('click', function(event) {
    event.preventDefault(); 
    const portHTML = `
    <div class="sobre-mim" id="sobre-mim"> 
                                    <div class="position">
                                        <h2 class="">Portfolio</h2>
                                        <div class="barra"></div>
                                    </div>

                                    <div class="filtro-port">
                                        <ul>
                                            <li>
                                                <a href="">Todas</a>
                                            </li>
                                            <li>
                                                <a href="">Web Designs</a>
                                            </li>
                                            <li>
                                                <a href="">Aplicações</a>
                                            </li>
                                            <li>
                                                <a href="">Desenvolvimento web</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="container mt-3">
                                        <div class="row">

                                            <div class="col">
                                                <div class="bloco-image-container">
                                                    <div class="bloco-image">
                                                        <img src="./projetos/Caco/caco.jpg" alt="">
                                                        <div class="icone-ex1">
                                                            <i class="fa-regular fa-eye fa-lg" style="color: #FFD43B;"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="bloco-text">
                                                    <h5>Bot Caco</h5>
                                                    <p value="Categoria">Aplicação</p>
                                                </div>
                                            </div>
                                            
                                            

                                            <div class="col">
                                                <div class="bloco-image-container">
                                                    <div class="bloco-image">
                                                        <img src="./projetos/laroc/laroc.jpg" alt="">
                                                        <div class="icone-ex1">
                                                            <i class="fa-regular fa-eye fa-lg" style="color: #FFD43B;"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="bloco-text">
                                                    <h5>Laroc Pizzaria</h5>
                                                    <p value="Categoria">Desenvolvimento Web</p>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="bloco-image-container">
                                                    <div class="bloco-image">
                                                        <img src="./projetos/finans/imagem.png" alt="">
                                                        <div class="icone-ex1">
                                                            <i class="fa-regular fa-eye fa-lg" style="color: #FFD43B;"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="bloco-text">
                                                    <h5>Finans</h5>
                                                    <p value="Categoria">Web Design</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
    `;
    loadContent(portHTML);
});

document.getElementById('contato-script').addEventListener('click', function(event) {
    event.preventDefault(); 
    const contatoHTML = `
    <div class="sobre-mim" id="sobre-mim"> 
        <div class="position">
        <h2 class="">Contato</h2>
        <div class="barra"></div>
    </div>


        <div class="container">
        <div id="google">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58488.43177279768!2d-46.82494890975711!3d-23.621291261968974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce546123a13c61%3A0x1f856c4bbae6eb84!2sTabo%C3%A3o%20da%20Serra%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1727467867630!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="mt-5">
            <h2>Formulario de Contato</h2>

            <div>
                <form action="">
                    <div class="row d-flex justify-content-round">
                        <div class="col-6">
                            <input type="text" name="nome" id="nome" placeholder="Nome Completo">
                        </div>
                        <div class="col-6">
                            <input type="email" name="email" id="email" placeholder="Endereço de E-mail">
                        </div>
                        <div class="col-12">
                            <textarea name="mensagem" id="mensagem" placeholder="Sua Mensagem"></textarea>
                        </div>    
                        <div class="col d-flex justify-content-end mt-4 mb-4">
                            <button>Enviar Mensagem</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    `;
    loadContent(contatoHTML);
});

// Chama a função para carregar o conteúdo padrão ao abrir a página
window.onload = loadDefaultContent;


