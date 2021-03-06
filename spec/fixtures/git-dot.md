# markdown-it-viz tests

(code block output as SVG)

@[toc](目录)

## engine: dot

```viz-dot
// dot staging.dot -T svg -O
digraph staging {
  labelloc="t"
  label="Undoing commits in Git\nNick Desaulniers"

  a [label="not modified\nversion A"];
  b [label="unstaged",color=red];
  c [label="staged",color=green];
  d [label="not modified\nversion B"]

  a -> b [label="<modify file>"];

  b -> a [label="git checkout <file>"]
  b -> c [label="git add <file>"];
  b -> d [label="git commit <file>"]

  c -> a [label="git checkout HEAD <file>"]
  c -> b [label="git reset <file>"]
  c -> d [label="git commit <file>"]

  d -> a [label="git reset --hard HEAD~"]
  d -> b [label="git reset HEAD~"]
  d -> c [label="git reset --soft HEAD~"]
}
```

## engine: circo

```viz-circo
// dot staging.dot -T svg -O
digraph staging {
  labelloc="t"
  label="Undoing commits in Git\nNick Desaulniers"

  a [label="not modified\nversion A"];
  b [label="unstaged",color=red];
  c [label="staged",color=green];
  d [label="not modified\nversion B"]

  a -> b [label="<modify file>"];

  b -> a [label="git checkout <file>"]
  b -> c [label="git add <file>"];
  b -> d [label="git commit <file>"]

  c -> a [label="git checkout HEAD <file>"]
  c -> b [label="git reset <file>"]
  c -> d [label="git commit <file>"]

  d -> a [label="git reset --hard HEAD~"]
  d -> b [label="git reset HEAD~"]
  d -> c [label="git reset --soft HEAD~"]
}
```
