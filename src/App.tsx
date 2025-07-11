import { Github, Mail, MapPin, Phone, BriefcaseIcon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2">
      <div className="bg-white shadow-md w-[210mm] min-h-[297mm] mx-auto p-8 text-gray-800">
        {/* Cabeçalho */}
        <header className="border-b border-blue-700 pb-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-3xl font-bold text-blue-800 mb-0">
                Gabriel Cirilo Erani
              </h1>
              <h2 className="text-xl text-gray-600 mb-2">Desenvolvedor Web</h2>
            </div>
            <QRCodeSVG
              value={"https://gabrieleraniportfolio.com"}
              size={70}
            />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-blue-600" />
              <span>gabrielciriloerani@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-blue-600" />
              <span>(17) 98117-4896</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-blue-600" />
              <span>Barretos, SP</span>
            </div>
            <div className="flex items-center">
              <Github size={16} className="mr-2 text-blue-600" />
              <span>github.com/GabrielErani</span>
            </div>
            <div className="flex items-center">
              <BriefcaseIcon size={16} className="mr-2 text-blue-600" />
              <span>gabrieleraniportfolio.com</span>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Coluna Principal */}
          <div className="md:w-2/3">
            {/* Resumo Profissional */}
            <section className="mb-4">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-gray-300 pb-1 mb-2">
                RESUMO SOBRE MIM
              </h2>              <p className="text-sm leading-tight">
                Gabriel, 19 anos, cursando o terceiro ano de Sistemas de Informação na Faculdade Barretos, busco minha primeira oportunidade de estágio na área de Tecnologia. Minha paixão por tecnologia vem desde a infância. Atualmente, trabalho com desenvolvimento web com foco em front-end, buscando sempre criar interfaces modernas, responsivas e com boa experiência do usuário. Almejo um estágio para expandir meus conhecimentos práticos e contribuir em um ambiente profissional.
              </p>
            </section>

            {/* Experiência Profissional */}
            <section className="mb-4">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-gray-300 pb-1 mb-2">
                EXPERIÊNCIA PROFISSIONAL
              </h2>
              <div className="mb-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-sm">
                    Atendente, Operador de Produção e Supervisor
                  </h3>
                  <span className="text-sm text-gray-600">2019 – 2025</span>
                </div>
                <h4 className="text-blue-600 text-sm mb-1">
                  Panificadora 37, Barretos
                </h4>
                <ul className="text-sm list-disc pl-5 space-y-0.5">
                  <li>Atendimento ao cliente no balcão, telefone e delivery</li>
                  <li>Operação de chapa e preparo de produtos</li>
                  <li>Apoio na produção e controle de qualidade</li>
                  <li>Supervisão e coordenação da equipe</li>
                  <li>Gestão de pedidos e controle de estoque</li>
                  <li>Implementação de melhorias nos processos</li>
                  <li>Treinamento de novos colaboradores</li>
                  <li>Desenvolvimento do site da empresa com React, TypeScript e Tailwind CSS</li>
                </ul>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-gray-300 pb-1 mb-2">
                FORMAÇÃO ACADÊMICA
              </h2>
              <div className="mb-2">
                <h3 className="font-semibold text-sm">
                  Bacharelado em Sistemas de Informação
                </h3>
                <h4 className="text-blue-600 text-sm mb-0">
                  Faculdade Barretos
                </h4>
                <span className="text-sm text-gray-600">
                  jan 2023 – dez 2026 | Cursando
                </span>
                <ul className="text-sm list-disc pl-5 space-y-0.5">
                  <li>Projetos em C, C#, C++, Java, Python, JavaScript, HTML5, CSS3</li>
                  <li>Participação em projetos de extensão na área de tecnologia</li>
                </ul>
              </div>

              <h3 className="text-sm font-semibold text-blue-600 mt-2 mb-1">
                Destaques na Mídia
              </h3>
              <ul className="text-sm space-y-0.5">
                <li>
                  • "Transformando a Panificadora 37 para a era digital: um
                  sucesso colaborativo" - Jornal de Barretos (2023)
                  <span className="text-blue-800"> Link no meu portfólio.</span>
                </li>
              </ul>
            </section>
            {/* Idiomas */}
            <section className="mb-4">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-gray-300">
                IDIOMAS
              </h2>
              <ul className="text-sm space-y-0.5">
                <li>
                  <span className="font-semibold">Português:</span> Nativo
                </li>
                <li>
                  <span className="font-semibold">Inglês:</span>
                  <ul className="pl-4 space-y-0.5 mt-1">
                    <li>• Compreensão escrita: <strong> Intermediário (B1)</strong></li>
                    <li>• Compreensão auditiva: <strong> Básico (A2)</strong></li>
                    <li>• Expressão oral: <strong> Iniciante (A1)</strong></li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>


          {/* Coluna Lateral */}
          <div className="md:w-1/3">
            {/* Habilidades Técnicas */}
            <section className="mb-4">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-gray-300 pb-1 mb-2">
                HABILIDADES TÉCNICAS
              </h2>

              <div className="mb-2">
                <h3 className="text-sm font-semibold text-blue-600 mb-0">
                  Front-end
                </h3>
                <ul className="text-sm pl-2 space-y-0.5">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• React.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Shadcn/ui</li>
                  <li>• Axios</li>
                  <li>• Vite</li>
                  <li>• Vue</li>                </ul>
              </div>

              <div className="mb-2">
                <h3 className="text-sm font-semibold text-blue-600 mb-0">
                  Back-end
                </h3>
                <ul className="text-sm pl-2 space-y-0.5">
                  <li>• Node.js</li>
                  <li>• Express</li>
                  <li>• MongoDB</li>
                  <li>• Firebase</li>
                  <li>• JWT </li>
                  <li>• OpenAi API</li>
                  <li>• Crypto-js</li>
                </ul>
              </div>

              <div className="mb-2">
                <h3 className="text-sm font-semibold text-blue-600 mb-0">
                  Ferramentas
                </h3>
                <ul className="text-sm pl-2 space-y-0.5">                  <li>• Git e GitHub</li>
                  <li>• VS Code</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
