module.exports = {
    apps : [
      {
        name: "stress_test",
        script: "./index.js",
        instances: 'max',
        instance_var: 'INSTANCE_ID',
        exec_mode: 'fork'
      }
    ]
  }
