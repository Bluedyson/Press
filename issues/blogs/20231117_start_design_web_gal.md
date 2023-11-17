# Begin design a system for making galgame base web

# assets

1. Background or Interactive back
2. Front-character or show
3. Text-layer
4. Music
5. Voice

# Framework

1. Game Client

   1. layer Manager

      > The Uni-Manager will be able on each layer
      >
      > 1. display_layer
      >    1. frame (only use in layer 0)
      >    2. PIXI.js
      >       1. animation
      >       2. group
      >    3. live2d
      >       1. animation active
      >       2. expression active
      >       3. Voice sync
      >    4. after_effect
      > 2. text_layer
      >    1. html- rich text
      > 3. interactive_layer
      >    1. Html
      > 4. notice_layer
      >    1. notice

   2. Download Manager

      > Provide unified API to download

   3. stage Manager

      > The main controller. Enable to dispatch event to other layer base scene JSON file.

2. Editor Client

   1. Animation Maker
   2. Scene Maker
   3. Multi-Language Maker
   4. Project Manager
   5. A/B test HOOK data Manager


# Scene-JSON

> # commend type
>
> 1. Text display
>    1. voice (one by one)
> 2. front display
> 3. animation
>    1. background animation
>    2. front animation active
> 4. music

{
    command: [
        {
            Type: text | animation | music | system, 
            Data: 
            	{text, speaker}
            	{display layer object, effect}
        		{music UUID, delay} 
				{system command, jump|change variable|change setting}
		}
    ]
}