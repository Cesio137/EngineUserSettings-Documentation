# Welcome to documentation

Fortnite has certain options to change the graphic API and Feature Levels. There was no way to change them via blueprint and have it work in-game. The EngineUserSettings plugin was created so that you can change and save these options in the easiest way possible.

## Finding nodes

* 1- Click with right mouse button to open BP search box.
* 2- Scroll down until you find the `EngineUserSettings` section.
* ![Image title](site:media/img/ue4/1.png)


## Nodes

---

### RHI

#### 1- Set Prefered RHI

* Change between DX11, DX12 or VULKAN.
* OBS: Game need to be restarted to take effect.
* ![Image title](site:media/img/ue4/2.png)

#### 2- Get Prefered RHI

* Gets the RHI that will be used when the game is restarted.
* ![Image title](site:media/img/ue4/4.png)

#### 3- Get Current RHI

* Get current RHI.
* ![Image title](site:media/img/ue4/3.png)

---

### Shader Model

#### 4- Set Preferred Feature Level

* Change between SM5, SM6 and Performance Mode.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/1.png)

#### 5- Get Preferred Feature Level

* Gets the Shader Model that will be used when the game is restarted. 
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/3.png)

#### 6- Get Current Feature Level

* Get current Shader Model.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/2.png)

#### 7- Get Max Feature Level

* Get max supported Shader Model  by hardware.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/4.png)

---

### Render

#### 8- Set GI Method

* Change Global Illumination method ` Lumen, SSR, Raytraced, None `.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/5.png)

#### 9- Get GI Method

* Get Global Illumination method.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/6.png)

#### 10- Set SSGI Quality

* Set Screen Space Global Illumination quality.
* ![Image title](site:media/img/ue4/19.png)

#### 11- Get SSGI Quality

* Get Screen Space Global Illumination quality.
* ![Image title](site:media/img/ue4/20.png)

#### 12- Set Reflection Method

* Change reflection method ` Lumen, SSR, Raytraced, None `.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/7.png)

#### 13- Get Reflection Method

* Get reflection method.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/8.png)

#### 14- Set SSR Quality

* Change Screen Space Reflection Quality.
* ![Image title](site:media/img/ue4/21.png)

#### 15- Get SSR Quality

* Get Screen Space Reflection Quality.
* ![Image title](site:media/img/ue4/22.png)

#### 16- Set Shadow Method

* Change shadow method ` Shadow Map, Virtual Shadow Maps `.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/9.png)

#### 17- Get Shadow Method

* Get Shadow Method.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/10.png)

#### 18- Set AA Method

* Change Antialiasing method ` None, FXAA, MSAA, TAA, TSR `.
* ![Image title](site:media/img/ue4/5.png)

#### 19- Get AA Method

* Get Antialiasing method.
* ![Image title](site:media/img/ue4/6.png)

#### 20- Set MSAA Quality

* Change MSAA quality.
* ![Image title](site:media/img/ue4/7.png)

#### 21- Get MSAA Quality

* Get MSAA quality.
* ![Image title](site:media/img/ue4/8.png)

#### 22- Set Ambient Occlusion

* Enable or disable Ambient Occlusion.
* ![Image title](site:media/img/ue4/11.png)

#### 23- Get Ambient Occlusion

* Get if Ambient Occlusion is enabled or disabled.
* ![Image title](site:media/img/ue4/12.png)

#### 24- Set Bloom

* Enable or disable Bloom.
* ![Image title](site:media/img/ue4/13.png)

#### 25- Get Bloom

* Get if Bloom is enabled or disabled.
* ![Image title](site:media/img/ue4/14.png)

#### 26- Set Lens Flare

* Enable or disable Lens Flare.
* ![Image title](site:media/img/ue4/15.png)

#### 27- Get Lens Flare

* Get if Lens Flare is enabled or disabled.
* ![Image title](site:media/img/ue4/16.png)

#### 28- Set Motion Blur

* Enable or disable Ambient Occlusion..
* ![Image title](site:media/img/ue4/17.png)

#### 29- Get Motion Blur

* Get if Ambient Occlusion is enabled or disabled.
* ![Image title](site:media/img/ue4/18.png)

#### 22- Set Nanite

* Enable or disable Nanite.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/11.png)

#### 23- Get Nanite

* Get if Nanite is enabled or disabled.
* OBS: UE5 only.
* ![Image title](site:media/img/ue5/12.png)