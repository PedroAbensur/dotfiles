require 'todo-comments'.setup()

require("transparent").setup({
  -- boolean: enable transparent
  extra_groups = { -- table/string: additional groups that should be cleared
    "Comment"
  },
  -- table: groups you don't want to clear
})
