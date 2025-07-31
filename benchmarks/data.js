window.BENCHMARK_DATA = {
  "lastUpdate": 1753995389440,
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
      }
    ]
  }
}