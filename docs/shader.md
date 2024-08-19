# Shader Compilation

Unreal Engine has several issues with stuttering due to the shader compiler. This feature allows you to compile shaders in-game, making the experience more seamless.

## How to use

* 1- Drag and drop `ABP_ShadersCompiler` to your menu level.
* 2- Get reference to the actor and them call `start` function from `ABP_ShadersCompiler`.
* Warning: This process can consume a lot of ram.

<video width="60%" controls>
    <source src="https://github.com/Cesio137/EngineUserSettings-Documentation/raw/gh-pages/media/video/Shaders.mp4" type="video/mp4">
</video>

## Nodes

#### 1- Start

* Start shader compilation.
* ![Image title](https://github.com/Cesio137/EngineUserSettings-Documentation/raw/gh-pages/media/img/ue4/23.png)

#### 2- Stop

* Stop shader compilation.
* ![Image title](https://github.com/Cesio137/EngineUserSettings-Documentation/raw/gh-pages/media/img/ue4/24.png)

## Events

#### 1- On Start

* Event called when shader start to compile.
* ![Image title](https://github.com/Cesio137/EngineUserSettings-Documentation/raw/gh-pages/media/img/ue4/25.png)

#### 2- On Shader Compiled

* Event called when one shader has been compiled.
* ![Image title](https://github.com/Cesio137/EngineUserSettings-Documentation/raw/gh-pages/media/img/ue4/26.png)

#### 3- On Finish

* Event called when all shaders compilation has benn finished.
* ![Image title](https://github.com/Cesio137/EngineUserSettings-Documentation/raw/gh-pages/media/img/ue4/27.png)