const extraQuestions = [
    {
        question: "O que significa a sigla 'BI'? (Variante 1)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 2)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'? (Variante 3)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 4)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus? (Variante 5)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 6)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 7)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 8)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'? (Variante 9)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 10)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 11)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 12)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 13)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 14)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 15)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 16)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 17)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 18)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'backup'? (Variante 19)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 20)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 21)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 22)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 23)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 24)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 25)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 26)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 27)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 28)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 29)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 30)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 31)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 32)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 33)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 34)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 35)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 36)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 37)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 38)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 39)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 40)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 41)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 42)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 43)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 44)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 45)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 46)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'? (Variante 47)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 48)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 49)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 50)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 51)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 52)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 53)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 54)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 55)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing? (Variante 56)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 57)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 58)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 59)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus? (Variante 60)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 61)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 62)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 63)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 64)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 65)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 66)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing? (Variante 67)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 68)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 69)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 70)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 71)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 72)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 73)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 74)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 75)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 76)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 77)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 78)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 79)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 80)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 81)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 82)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 83)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 84)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 85)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 86)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 87)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 88)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 89)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 90)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 91)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'? (Variante 92)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 93)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 94)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 95)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 96)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 97)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 98)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 99)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 100)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 101)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 102)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 103)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 104)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 105)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 106)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 107)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 108)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 109)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 110)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 111)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 112)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 113)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 114)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 115)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 116)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 117)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 118)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 119)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 120)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 121)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 122)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 123)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 124)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 125)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 126)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 127)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 128)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'? (Variante 129)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 130)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 131)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 132)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 133)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 134)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 135)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 136)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 137)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 138)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 139)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 140)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 141)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 142)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 143)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 144)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 145)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 146)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing? (Variante 147)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 148)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 149)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 150)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 151)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 152)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 153)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 154)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 155)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 156)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 157)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 158)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 159)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 160)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 161)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'? (Variante 162)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 163)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 164)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 165)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 166)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 167)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 168)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 169)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 170)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 171)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 172)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 173)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 174)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'? (Variante 175)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 176)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 177)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 178)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 179)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 180)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 181)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 182)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 183)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 184)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 185)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'? (Variante 186)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 187)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 188)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 189)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 190)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 191)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 192)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 193)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 194)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 195)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 196)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 197)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 198)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 199)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 200)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'? (Variante 201)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 202)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 203)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 204)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 205)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 206)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 207)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 208)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 209)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 210)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 211)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 212)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 213)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 214)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 215)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'? (Variante 216)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 217)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 218)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 219)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 220)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 221)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 222)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 223)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 224)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 225)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 226)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 227)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 228)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 229)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 230)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 231)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 232)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 233)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 234)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 235)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 236)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'? (Variante 237)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 238)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 239)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 240)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 241)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 242)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 243)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 244)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 245)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 246)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 247)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 248)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 249)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 250)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 251)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 252)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 253)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 254)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 255)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 256)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 257)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 258)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 259)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 260)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 261)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 262)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 263)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 264)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 265)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 266)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 267)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 268)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 269)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 270)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 271)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'? (Variante 272)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 273)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 274)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 275)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 276)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 277)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 278)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 279)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 280)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 281)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 282)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 283)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 284)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 285)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 286)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 287)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 288)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 289)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 290)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 291)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 292)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 293)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing? (Variante 294)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 295)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 296)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 297)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 298)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 299)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 300)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 301)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 302)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'? (Variante 303)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 304)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 305)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 306)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 307)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 308)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 309)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 310)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 311)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 312)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 313)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'backup'? (Variante 314)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 315)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 316)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 317)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 318)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 319)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 320)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 321)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 322)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 323)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 324)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 325)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 326)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 327)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 328)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'? (Variante 329)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 330)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 331)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 332)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 333)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 334)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 335)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 336)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 337)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 338)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 339)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 340)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'? (Variante 341)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 342)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 343)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 344)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 345)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 346)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'? (Variante 347)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 348)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 349)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 350)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 351)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 352)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 353)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 354)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 355)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 356)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'? (Variante 357)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 358)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 359)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'? (Variante 360)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 361)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 362)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 363)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 364)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 365)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 366)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 367)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 368)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 369)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 370)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 371)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 372)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 373)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 374)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 375)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 376)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 377)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 378)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 379)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 380)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 381)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 382)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 383)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 384)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 385)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 386)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 387)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 388)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 389)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 390)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 391)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 392)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 393)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 394)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 395)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 396)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'backup'? (Variante 397)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 398)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 399)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 400)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 401)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 402)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 403)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 404)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'? (Variante 405)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 406)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 407)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 408)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'? (Variante 409)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 410)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 411)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 412)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 413)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 414)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 415)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'? (Variante 416)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 417)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 418)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 419)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 420)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 421)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 422)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 423)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 424)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 425)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 426)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 427)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 428)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 429)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'? (Variante 430)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 431)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 432)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 433)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 434)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 435)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 436)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 437)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 438)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 439)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 440)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 441)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 442)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 443)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 444)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 445)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 446)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 447)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 448)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'? (Variante 449)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 450)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 451)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 452)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 453)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 454)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'? (Variante 455)",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 456)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 457)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 458)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 459)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 460)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus? (Variante 461)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 462)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 463)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 464)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 465)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 466)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 467)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'? (Variante 468)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 469)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 470)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 471)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 472)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 473)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 474)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 475)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 476)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto? (Variante 477)",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 478)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 479)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 480)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus? (Variante 481)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 482)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 483)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 484)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 485)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus? (Variante 486)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 487)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus? (Variante 488)",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída? (Variante 489)",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BIOS'? (Variante 490)",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing? (Variante 491)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 492)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 493)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente? (Variante 494)",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing? (Variante 495)",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'? (Variante 496)",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 497)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 498)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'? (Variante 499)",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'? (Variante 500)",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
];