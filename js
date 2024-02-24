function calculateDaysBetweenDates(begin, end) {

http[s]://host.xz[:port]/path/to/repo.git/

git://host.xz[:port]/path/to/repo.git/

[user@]host.xz:path/to/repo.git/

ssh://[user@]host.xz[:port]/path/to/repo.git/

#- "/PATH/TO/DIRECTORY/OR/FILE"

# Ignore the `/src/some-dir/kernel.rs` file in this repository.
- "/src/some-dir/kernel.rs"

# Ignore files called `secrets.json` anywhere in this repository.
- "secrets.json"

# Ignore all files whose names begin `secret` anywhere in this repository.
- "secret*"

# Ignore files whose names end `.cfg` anywhere in this repository.
- "*.cfg"

# Ignore all files in or below the `/scripts` directory of this repository.
- "/scripts/**"

"secrets.json"

- "secret*"

- "*.cfg"

- "/scripts/**"

REPOSITORY-REFERENCE:
  - "/PATH/TO/DIRECTORY/OR/FILE"
  - "/PATH/TO/DIRECTORY/OR/FILE"
  - ...

http[s]://host.xz[:port]/path/to/repo.git/

git://host.xz[:port]/path/to/repo.git/

[user@]host.xz:path/to/repo.git/

ssh://[user@]host.xz[:port]/path/to/repo.git/

https://github.com/octo-org/* octo-org

# Ignore all `.env` files at any path, in any repository.
# This setting applies to all repositories, not just to those on GitHub.com.
# This could also have been written on a single line as:
#
# "*": ["**/.env"]
"*":
  - "**/.env"

# In the `octo-repo` repository in this organization:
octo-repo:
  # Ignore the `/src/some-dir/kernel.rs` file.
  - "/src/some-dir/kernel.rs"

# In the `primer/react` repository on GitHub:
https://github.com/primer/react.git:
  # Ignore files called `secrets.json` anywhere in this repository.
  - "secrets.json"
  # Ignore files called `temp.rb` in or below the `/src` directory.
  - "/src/**/temp.rb"

# In the `copilot` repository of any GitHub organization:
git@github.com:*/copilot:
  # Ignore any files in or below the `/__tests__` directory.
  - "/__tests__/**"
  # Ignore any files in the `/scripts` directory.
  - "/scripts/*"

# In the `gitlab-org/gitlab-runner` repository on GitLab:
git@gitlab.com:gitlab-org/gitlab-runner.git:
  # Ignore the `/main_test.go` file.
  - "/main_test.go"
  # Ignore any files with names beginning `server` or `session`, anywhere in this repository.
  - "{server,session}*"
  # Ignore any files with names ending `.md` or `.mk`, anywhere in this repository.
  - "*.m[dk]"
  # Ignore files directly within directories such as `packages` or `packaged`, anywhere in this repository.
  - "**/package?/*"
  # Ignore files in or below any `security` directories, anywhere in this repository.
  - "**/security/**"


octo-repo:

- "/src/some-dir/kernel.rs"

https://github.com/primer/react.git:

  - "secrets.json"

  - "/src/**/temp.rb"

git@github.com:*/copilot:

- "/__tests__/**"

  - "/scripts/*"

git@gitlab.com:gitlab-org/gitlab-runner.git:

  - "/main_test.go"

  - "{server,session}*"

- "*.m[dk]"

- "**/package?/*"

  - "**/security/**"

copilot.content_exclusion_changed

UMSCHALT+Befehlstaste+P (Mac) / STRG+UMSCHALT+P (Windows/Linux).
Geben Sie Folgendes ein: reload


OLD-NAMESPACE/IMAGE-NAME


https://github.com/previousorgname

