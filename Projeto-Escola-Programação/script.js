const turma = [
    {
        turma: "Hipátia",
        curso:"JavasCript",
        inicio:"30/11/2022",
        termino:"30/01/2023",
        numeroDeAlunos: 150,
        período:"Noturno",
        Concluida: boolean
    },
    {
        turma: "Sibyla",
        curso:"JavasCript",
        inicio:"30/10/2022",
        termino:"30/12/2022",
        numeroDeAlunos: 200,
        período:"Integral",
        Concluida: boolean
    },
    {
        turma: "Curie",
        curso:"HTML e CSS",
        inicio:"15/09/2022",
        termino:"15/10/2022",
        numeroDeAlunos: 180,
        período:"Noturno",
        Concluida: boolean
    },
    {
        turma: "Zhenyi",
        curso:"HTML e CSS",
        inicio:"01/11/2022",
        termino:"01/01/2023",
        numeroDeAlunos: 80,
        período:"Integral",
        Concluida: boolean
    },
    {
        turma: "Clarke",
        curso:"HTML e CSS",
        inicio:"04/07/2022",
        termino:"04/09/2022",
        numeroDeAlunos: 200,
        período:"Noturno",
        Concluida: boolean
    },
    {
        turma: "Blackwell",
        curso:"APIsRest",
        inicio:"20/03/2022",
        termino:"20/06/2022",
        numeroDeAlunos: 100,
        período:"Integral",
        Concluida: boolean
    },
    {
        turma:"Elion",
        curso:"APIsRest",
        inicio:"12/01/2022",
        termino:"12/06/2022",
        numeroDeAlunos: 200,
        período:"Noturno",
        Concluida: boolean
    },
    {
        turma: "Burnell",
        curso:"APIsRest",
        inicio:"18/10/2022",
        termino:"18/04/2023",
        numeroDeAlunos: 90,
        período:"Integral",
        Concluida: boolean
    }
];

const curso = [
    {
        curso:"HTML e CSS",
        descrição:"Curso completo de HTML e CSS do básico ao avançado",
        duração:"1 Mês",
        valor: 500
    },   
    {
        curso:"JavasCript",
        descrição:"Curso completo de JavasCript do básico ao avançado",
        duração:"2 Mêses",
        valor: 900
    },
    {
        curso:"APIsRest",
        descrição:"Curso completo de APISRest do básico ao avançado",
        duração:"6 Mêses",
        valor: 2000
    }   
];

const estudante =[
    {
        estudante:"Chris Evans",
        turma:"Hipátia",
        curso:"JavasCript",
        valor: 900,
        nparcelas: 9,
        desconto: boolean,
        parcelas: 100
    },
    {
        estudante:"Sirlene",
        turma:"Hipátia",
        curso:"JavasCript",
        valor: 900,
        nparcelas: 9,
        desconto: boolean,
        parcelas: 100
    },
    {
        estudante:"Halle Berry",
        turma:"Burnell",
        curso:"APIsRest",
        valor: 2000,
        nparcelas: 4,
        desconto: boolean,
        parcelas: 500
    },
    {
        estudante:"Kaue",
        turma:"Burnell",
        curso:"APIsRest",
        valor: 2000,
        nparcelas: 4,
        desconto: boolean,
        parcelas: 500
    },
    {
        estudante:"Lashana Lynch",
        turma:"Zhenyi",
        curso:"HTML e CSS",
        valor: 500,
        nparcelas: 0,
        desconto: boolean,
        parcelas: 0
    },
    {
        estudante:"Alan",
        turma:"Zhenyi",
        curso:"HTML e CSS",
        valor: 500,
        nparcelas: 0,
        desconto: boolean,
        parcelas: 0
    }
];

const parcelarCurso = (parcelas)=>{

    if(parcelas <= 2){
// Calculo que vai retornar valor com desconto
// Frase
cursos[1].valor
    }else{
// Calcular sem Desconto
// Frase
    }
}