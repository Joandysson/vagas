export class Data {
    porotal() : object {
        return portal;
    }

    server() : object {
        return services;
    }

    year() {
        return year;
    }

    month() {
        return month;
    }
}

const portal = [
    {
        name: 'CIDADÃO',
        description: 'Em respeito a você oferecemos serviços de transparência para que você possa acompanhar o uso do dinheiro público.',
        color: "red",
        percentual: "6"
    },
    {
        name: 'CONTRIBUINTE',
        description: 'Pensando em tornar sua vida mais fácil, oferecemos serviços para você acompanhar IPTU, ISS, Certidão e muito mais.',
        color: "green",
        percentual: "5"
    },
    {
        name: 'SERVIDOR',
        description: 'Acesse serviços exclusivos para o servidor.',
        color: "blue",
        percentual: "4"
    },
    {
        name: 'FORNECEDOR',
        description: 'Pensando em tornar sua vida mais fácil, oferecemos serviços para você acompanhar seus pagamentos e extratos.',
        color  : "yellow",
        percentual: "2"
    }
];

const services = [
    {
        name: 'CIDADÃO',
        description: 'Aqui você acompanha os dados da lei complementar 131(Transparência Pública) e aproveitar as facilidades dos serviços destinados aos cidadãos.',
        classIcon: "icon-service-red",
        icon: "https://www.municipioonline.com.br/design/portal/assets/pd-icons/icon-view.png",
        border: "border-red"
    },
    {
        name: 'CONTRIBUINTE',
        description: 'Sempre na palma da mão você visualiza e acompanha débitos de IPTU, Inscrições de Empresas e autônomos, Emissão de certidões negativas e muito mais.',
        classIcon: "icon-service-green",
        icon: "https://www.municipioonline.com.br/design/portal/assets/pd-icons/icon-portfolio.png",
        border: "border-green"
    },
    {
        name: 'FORNECEDOR',
        description: 'Pensando em tornar sua vida mais fácil, oferecemos serviços para você acompanhar seus pagamentos e extratos.',
        classIcon: "icon-service-yellow",
        icon: "https://www.municipioonline.com.br/design/portal/assets/pd-icons/icon-shop.png",
        border: "border-yellow"

    },
    {
        name: 'SERVIDOR',
        description: 'Temos serviços prontos para te oferecer e agilizar o relacionamento com o departamento pessoal de onde estiver.',
        classIcon: "icon-service-blue",
        icon: "https://www.municipioonline.com.br/design/portal/assets/pd-icons/icon-user.png",
        border: "border-blue"

    },
    {
        name: 'PARCEIRO',
        description: 'A chave do sucesso é a colaboração, juntos nós fazemos acontecer.',
        classIcon: "icon-service-red",
        icon: "https://www.municipioonline.com.br/design/portal/assets/pd-icons/icon-deal.png",
        border: "border-red"
    }
];

const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const year = [
    2020,
    2019,
    2018,
    2017,
    2016
];