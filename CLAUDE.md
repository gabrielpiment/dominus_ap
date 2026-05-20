# Dominus AP — Agent Rules

Antes de qualquer ação, consulte os arquivos de regras em `.claude/rules/`:

| Arquivo | Descrição |
|---|---|
| [rulesnuxt.md](.claude/rules/rulesnuxt.md) | Estrutura de diretórios oficial do Nuxt 4 |
| [rulesdevia.md](.claude/rules/rulesdevia.md) | Padrões de código, nomenclatura e arquitetura |
| [rulesiadb.md](.claude/rules/rulesiadb.md) | Guia de integração com Supabase (@nuxtjs/supabase) |

## Resumo das regras críticas

- Todo código frontend fica em `app/` — pages, components, composables, layouts, etc.
- Componentes em **PascalCase**, páginas em **minúsculas**, composables com prefixo `use`.
- Lógica de dados vai em composables, nunca diretamente em componentes.
- Sempre usar `lang="ts"` nos componentes Vue.
- Imports sempre explícitos — evitar depender de auto-imports.
- Tipos globais em `shared/types/`.
