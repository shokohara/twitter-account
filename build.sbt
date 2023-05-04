Global / onChangedBuildSource := ReloadOnSourceChanges
enablePlugins(ScalaJSPlugin)
scalaVersion := "3.3.0-RC5"
scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) }