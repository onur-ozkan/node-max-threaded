module.exports = {
    apps : [
      {
        name: "stress_test",
        script: "./index.js",
        instances: '4',
        instance_var: 'INSTANCE_ID',
        exec_mode: 'fork'
      }
    ]
  }