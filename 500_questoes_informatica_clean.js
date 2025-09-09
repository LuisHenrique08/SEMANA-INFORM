const extraQuestions = [
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que significa a sigla 'BI'?",
        options: ['Business Intelligence', 'Binary Input', 'Basic Integration', 'Backup Information'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional de código aberto?",
        options: ['Windows', 'Linux', 'macOS', 'iOS'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é um antivírus?",
        options: ['Programa que protege contra malwares', 'Tipo de processador', 'Memória do computador', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "Qual destes é um periférico de saída?",
        options: ['Teclado', 'Mouse', 'Monitor', 'Scanner'],
        correct: 2
    },
    {
        question: "O que significa a sigla 'BIOS'?",
        options: ['Basic Input Output System', 'Binary Internet Operating System', 'Basic Internal Output Software', 'Backup Input Output System'],
        correct: 0
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "Qual destes dispositivos armazena dados permanentemente?",
        options: ['RAM', 'HD', 'Cache', 'Memória Volátil'],
        correct: 1
    },
    {
        question: "O que é phishing?",
        options: ['Ataque para roubo de informações', 'Programa de edição', 'Tipo de hardware', 'Protocolo de rede'],
        correct: 0
    },
    {
        question: "O que é 'hardware'?",
        options: ['Parte física do computador', 'Programa de computador', 'Rede de computadores', 'Sistema operacional'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que significa 'SSD'?",
        options: ['Solid State Drive', 'Simple Storage Disk', 'Standard State Disk', 'Secure System Drive'],
        correct: 0
    },
    {
        question: "O que é 'backup'?",
        options: ['Cópia de segurança de dados', 'Tipo de rede', 'Sistema operacional', 'Software de edição'],
        correct: 0
    },
];