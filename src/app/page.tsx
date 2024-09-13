const Page = () =>{
  const horacompleta = new Intl.DateTimeFormat('pt-BR',{ // aqui estou pegando as hora atual
    timeStyle:'short',//obs: e apenas a horas e minutos ,
    hour12:false
  })
  .format();

  const hour = 23; //new Date().getHours();
  let greeting = ' ';

  if (hour >= 0 && hour < 12){
    greeting = 'bom dia 😀';
  }else if(hour >= 12 && hour < 18){
    greeting = 'boa tarde 😎';
  }else if (hour >=18 && hour <= 23){
    greeting = 'boa noite 😪';
  }         
  return (
    <div className="w-screen  h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-sky-500 to-indigo-500">
    <div className="text-9xl">{horacompleta}</div>
    <div className="text-5xl font-bold">{greeting}</div>
    </div>
  );
}
export default Page;