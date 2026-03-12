window.BENCHMARK_DATA = {
  "lastUpdate": 1773348142508,
  "repoUrl": "https://github.com/vShift-Kid/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23327f5dc72270cf77cd87779779fdd237c7a15c",
          "message": "Merge pull request #106 from czlonkowski/fix/docker-config-file-support\n\nfix: add Docker configuration file support (fixes #105)",
          "timestamp": "2025-07-31T18:07:48+02:00",
          "tree_id": "ee973173090c4b224f364e2e1f313c9c23d7bf89",
          "url": "https://github.com/vShift-Kid/n8n-mcp/commit/23327f5dc72270cf77cd87779779fdd237c7a15c"
        },
        "date": 1753995388709,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0187,
            "unit": "ms",
            "range": 0.3021,
            "extra": "53358 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1672,
            "unit": "ms",
            "range": 0.4870000000000001,
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "unit": "ms",
            "range": 0.2722,
            "extra": "211734 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0669,
            "unit": "ms",
            "range": 0.3938,
            "extra": "14941 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b92e5114634e52aee1fbb477396a21f8c229d470",
          "message": "perf: optimize workflow tool responses for token efficiency (v2.29.0) (#479)\n\n* perf: optimize workflow tool responses for token efficiency (v2.29.0)\n\nReduce response sizes by 75-90% for 4 workflow management tools:\n\n- n8n_update_partial_workflow: Returns {id, name, active, operationsApplied}\n- n8n_create_workflow: Returns {id, name, active, nodeCount}\n- n8n_update_full_workflow: Returns {id, name, active, nodeCount}\n- n8n_delete_workflow: Returns {id, name, deleted: true}\n\nAI agents can use n8n_get_workflow with mode 'structure' if they need\nto verify the current workflow state after operations.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update tests and add nodeCount to partial update response\n\n- Fix handleCreateWorkflow test to expect minimal response\n- Fix handleDeleteWorkflow test to expect minimal response\n- Add nodeCount to n8n_update_partial_workflow response for consistency\n- Update documentation and CHANGELOG\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update handlers-workflow-diff tests for minimal response\n\nUpdate 3 more tests that expected full workflow in response:\n- should apply diff operations successfully\n- should activate workflow after successful update\n- should deactivate workflow after successful update\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update integration tests to use minimal response format\n\nIntegration tests now verify minimal response format and use\nclient.getWorkflow() to fetch actual workflow state for verification.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n* fix: update create/update workflow integration tests for minimal response\n\nIntegration tests now verify minimal response and use client.getWorkflow()\nto fetch actual workflow state for detailed verification.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n* fix: add type assertions to fix TypeScript errors in tests\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-09T16:36:17+01:00",
          "tree_id": "6120e3cad0bd15cbc7b0ab855182413de487bcb7",
          "url": "https://github.com/vShift-Kid/n8n-mcp/commit/b92e5114634e52aee1fbb477396a21f8c229d470"
        },
        "date": 1765476151338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25b8a8145d0fc84fb23c51ffee6a103b99c90463",
          "message": "feat(validator): detect conditional branch fan-out & connection auto-fixes (#622)\n\n* feat(auto-fixer): add 5 connection structure fix types\n\nAdd automatic repair for malformed workflow connections commonly\ngenerated by AI models:\n- connection-numeric-keys: \"0\",\"1\" keys → main[0], main[1]\n- connection-invalid-type: type:\"0\" → type:\"main\" (or parent key)\n- connection-id-to-name: node ID refs → node name refs\n- connection-duplicate-removal: dedup identical connection entries\n- connection-input-index: out-of-bounds input index → clamped\n\nIncludes collision-safe ID-to-name renames, medium confidence on\nmerge conflicts and index clamping, shared CONNECTION_FIX_TYPES\nconstant, and 24 unit tests.\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n\n* feat(validator): detect IF/Switch/Filter conditional branch fan-out misuse\n\nAdd CONDITIONAL_BRANCH_FANOUT warning when conditional nodes have all\nconnections on main[0] with higher outputs empty, indicating both\nbranches execute together instead of being split by condition.\n\nExtract getShortNodeType() and getConditionalOutputInfo() helpers to\ndeduplicate conditional node detection logic.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en",
          "timestamp": "2026-03-08T08:41:44+01:00",
          "tree_id": "53678da586143eb794b4172519233d3c24bf2570",
          "url": "https://github.com/vShift-Kid/n8n-mcp/commit/25b8a8145d0fc84fb23c51ffee6a103b99c90463"
        },
        "date": 1773348142065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}