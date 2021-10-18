## Instalando typescript

```bash
  yarn add typescript -D
```

## Inicializar o typescript no projeto

```bash
  yarn tsc --init
```

Esse comando vai criar um arquivo "tsconfig.json" na raiz do nosso projeto.

Para converte nosso projeto que esta escrito em typescript para javascript usamos o comando:

```bash
  yarn tsc
```

Com isso um novo arquivo JS sera gerado para cada arquivo TS que temos em nosso projeto, esse arquivo é gerado por padrão no mesmo diretório do arquivo que esta sendo convertido, para alterarmos isso, alteramos a propriedade "outDir" do arquivo tsconfig.json:

```json
  ...
    outDir: "./dist"
  ...
```

agora que convertemos nossos arquivos para um formato que o node entende, podemos rodar nosso projeto com:

```bash
  node dist/server.ts
```

Porém ter que converter nosso código e rodar nosso projeto a cada alteração não é uma forma produtiva de se trabalhar, para otimizarmos a compilação do nosso projeto iremos usar uma ferramenta que automatiza esse processo, que é o "ts-node-dev".

## Observações

Para que o prettie e eslint funcione foi preciso instalar as seguintes versões especificas:

- eslint-config-prettier@6.15.0
- eslint-plugin-prettier@3.2.0
