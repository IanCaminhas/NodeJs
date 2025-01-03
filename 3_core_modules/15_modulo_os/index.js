/*
Módulo OS
    1 - Com o módulo os podemos extrair informações do sistema operacional.
    2 - Este também é um Core Module.

    Consigo extrair outras informações além das que estão neste arquivo.
*/

const os = require("os");

/*Quantas cpus tem a máquina ou servidor ?
    Esse array contém os processadores que existem na máquina
    [
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 25667968,
      nice: 0,
      sys: 21515421,
      idle: 384283968,
      irq: 6101046
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 21131390,
      nice: 0,
      sys: 5788640,
      idle: 404547078,
      irq: 220890
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 29329875,
      nice: 0,
      sys: 13562000,
      idle: 388575171,
      irq: 195359
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 29434093,
      nice: 0,
      sys: 7876921,
      idle: 394156093,
      irq: 91578
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 32230968,
      nice: 0,
      sys: 9359453,
      idle: 389876656,
      irq: 155468
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 20959109,
      nice: 0,
      sys: 5688718,
      idle: 404819281,
      irq: 106093
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 29993703,
      nice: 0,
      sys: 8856140,
      idle: 392617265,
      irq: 151671
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: {
      user: 23616640,
      nice: 0,
      sys: 6743203,
      idle: 401107250,
      irq: 103687
    }
  }
]
*/
console.log(os.cpus());

//Quanto de memória ram livre a máquina possui(em bytes) ? Saída: 6085668864 
console.log(os.freemem());

//Qual o diretório principal desta máquina ? Qual o diretório home ? Saída: C:\Users\Ian
console.log(os.homedir())

//Qual o tipo de sistema operacional rodando nessa máquina ? Saída: Windows_NT
console.log(os.type());