/* Generated by JSIL v0.6.0 build 23610. See http://jsil.org/ for more information. */ 
/* Generating type stubs only */ 
var $asm05 = JSIL.DeclareAssembly("Microsoft.Xna.Framework.Input.Touch, Version=4.0.0.0, Culture=neutral, PublicKeyToken=842cf8be1de50553");

JSIL.DeclareNamespace("Microsoft");
JSIL.DeclareNamespace("Microsoft.Xna");
JSIL.DeclareNamespace("Microsoft.Xna.Framework");
JSIL.DeclareNamespace("Microsoft.Xna.Framework.Input");
JSIL.DeclareNamespace("Microsoft.Xna.Framework.Input.Touch");
JSIL.MakeEnum(
  "Microsoft.Xna.Framework.Input.Touch.GestureType", true, {
    None: 0, 
    Tap: 1, 
    DoubleTap: 2, 
    Hold: 4, 
    HorizontalDrag: 8, 
    VerticalDrag: 16, 
    FreeDrag: 32, 
    Pinch: 64, 
    Flick: 128, 
    DragComplete: 256, 
    PinchComplete: 512
  }, true
);

JSIL.MakeStruct($asm06.TypeRef("System.ValueType"), "Microsoft.Xna.Framework.Input.Touch.GestureSample", true, [], function ($) {
  var $thisType = $.publicInterface;

  $.ExternalMethod({Static:false, Public:true }, ".ctor", 
    $sig.make(0x14E15, null, [
        $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType"), $asm06.TypeRef("System.TimeSpan"), 
        $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), 
        $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), $asm01.TypeRef("Microsoft.Xna.Framework.Vector2")
      ], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Delta", 
    $sig.make(0x14E07, $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Delta2", 
    $sig.make(0x14E11, $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_GestureType", 
    $sig.make(0x14E03, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Position", 
    $sig.make(0x14E05, $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Position2", 
    $sig.make(0x14E06, $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Timestamp", 
    $sig.make(0x14E04, $asm06.TypeRef("System.TimeSpan"), [], [])
  );

  $.Field({Static:false, Public:false}, "_gestureType", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType")); 
  $.Field({Static:false, Public:false}, "_timestamp", $asm06.TypeRef("System.TimeSpan")); 
  $.Field({Static:false, Public:false}, "_position", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2")); 
  $.Field({Static:false, Public:false}, "_position2", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2")); 
  $.Field({Static:false, Public:false}, "_delta", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2")); 
  $.Field({Static:false, Public:false}, "_delta2", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2")); 
  $.Property({Static:false, Public:true }, "GestureType", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType"));

  $.Property({Static:false, Public:true }, "Timestamp", $asm06.TypeRef("System.TimeSpan"));

  $.Property({Static:false, Public:true }, "Position", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"));

  $.Property({Static:false, Public:true }, "Position2", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"));

  $.Property({Static:false, Public:true }, "Delta", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"));

  $.Property({Static:false, Public:true }, "Delta2", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"));

});

JSIL.MakeStaticClass("Microsoft.Xna.Framework.Input.Touch.Touch", false, [], function ($) {
  var $thisType = $.publicInterface;

  $.ExternalMethod({Static:true , Public:false}, "get_WindowHandle", 
    $sig.make(0x14E30, $asm06.TypeRef("System.IntPtr"), [], [])
  );

  $.ExternalMethod({Static:true , Public:false}, "set_WindowHandle", 
    $sig.make(0x14E32, null, [$asm06.TypeRef("System.IntPtr")], [])
  );

  $.Field({Static:true , Public:false}, "_windowHandle", $asm06.TypeRef("System.IntPtr")); 
  $.Field({Static:true , Public:false}, "SyncObject", $.Object); 
  $.Property({Static:true , Public:false}, "WindowHandle", $asm06.TypeRef("System.IntPtr"));

});

JSIL.MakeStruct($asm06.TypeRef("System.ValueType"), "Microsoft.Xna.Framework.Input.Touch.TouchCollection", true, [], function ($) {
  var $thisType = $.publicInterface;

  $.ExternalMethod({Static:false, Public:true }, ".ctor", 
    $sig.make(0x14E20, null, [$jsilcore.TypeRef("System.Array", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")])], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Add", 
    $sig.make(0x14E31, null, [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")], [])
  );

  $.ExternalMethod({Static:false, Public:false}, "AddTouchLocation", 
    $sig.make(0x14E24, null, [
        $.Int32, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), 
        $.Single, $.Single, 
        $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), $.Single, 
        $.Single
      ], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Clear", 
    $sig.make(0x14E33, null, [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Contains", 
    $sig.make(0x14E35, $.Boolean, [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "CopyTo", 
    $sig.make(0x14E36, null, [$jsilcore.TypeRef("System.Array", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")]), $.Int32], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "FindById", 
    $sig.make(0x14E22, $.Boolean, [$.Int32, $jsilcore.TypeRef("JSIL.Reference", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")])], [])
  );

  $.ExternalMethod({Static:true , Public:false}, "FindById", 
    $sig.make(0x14E2C, $.Int32, [$jsilcore.TypeRef("JSIL.Reference", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.XNAINPUT_TOUCH_LOCATION_STATE")]), $.Int32], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Count", 
    $sig.make(0x14E1E, $.Int32, [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_IsConnected", 
    $sig.make(0x14E18, $.Boolean, [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_IsReadOnly", 
    $sig.make(0x14E1F, $.Boolean, [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Item", 
    $sig.make(0x14E1B, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation"), [$.Int32], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "GetEnumerator", 
    $sig.make(0x14E3A, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchCollection/Enumerator"), [], [])
  );

  $.ExternalMethod({Static:true , Public:false}, "GetLocInfo", 
    $sig.make(0x14E2A, $.Boolean, [
        $jsilcore.TypeRef("JSIL.Reference", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.XNAINPUT_TOUCH_LOCATION_STATE")]), $.Int32, 
        $jsilcore.TypeRef("JSIL.Reference", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchCollection/LocInfo")])
      ], [])
  );

  $.ExternalMethod({Static:false, Public:false}, "GetPreviousLocation", 
    $sig.make(0x14E26, $.Boolean, [
        $.Int32, $.Int32, 
        $jsilcore.TypeRef("JSIL.Reference", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")])
      ], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "IndexOf", 
    $sig.make(0x14E2D, $.Int32, [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Insert", 
    $sig.make(0x14E2E, null, [$.Int32, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Remove", 
    $sig.make(0x14E38, $.Boolean, [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "RemoveAt", 
    $sig.make(0x14E2F, null, [$.Int32], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "set_Item", 
    $sig.make(0x14E1D, null, [$.Int32, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")], [])
  );

  $.ExternalMethod({Static:false, Public:false}, "IEnumerable`1.GetEnumerator", 
    $sig.make(0x14E3B, $asm06.TypeRef("System.Collections.Generic.IEnumerator`1", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")]), [], [])
  );

  $.ExternalMethod({Static:false, Public:false}, "IEnumerable.GetEnumerator", 
    $sig.make(0x14E3C, $asm06.TypeRef("System.Collections.IEnumerator"), [], [])
  );

  $.ExternalMethod({Static:false, Public:false}, "Update", 
    $sig.make(0x14E28, null, [
        $jsilcore.TypeRef("JSIL.Reference", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.XNAINPUT_TOUCH_LOCATION_STATE")]), $jsilcore.TypeRef("JSIL.Reference", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.XNAINPUT_TOUCH_LOCATION_STATE")]), 
        $.Boolean
      ], [])
  );

  $.Field({Static:false, Public:false}, "isConnected", $.Boolean); 
  $.Field({Static:false, Public:false}, "locationCount", $.Int32); 
  $.Field({Static:false, Public:false}, "location0", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:false, Public:false}, "location1", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:false, Public:false}, "location2", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:false, Public:false}, "location3", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:false, Public:false}, "location4", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:false, Public:false}, "location5", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:false, Public:false}, "location6", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:false, Public:false}, "location7", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")); 
  $.Field({Static:true , Public:false}, "prevLocations", $jsilcore.TypeRef("System.Array", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")]), function ($pi) {
      return JSIL.Array.New($asm05.Microsoft.Xna.Framework.Input.Touch.TouchLocation, 8);
    }); 
  $.Property({Static:false, Public:true }, "IsConnected", $.Boolean);

  $.Property({Static:false, Public:true , Virtual:true }, "Item", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation"));

  $.Property({Static:false, Public:true , Virtual:true }, "Count", $.Int32);

  $.Property({Static:false, Public:true , Virtual:true }, "IsReadOnly", $.Boolean);

  $.ImplementInterfaces(
      $asm06.TypeRef("System.Collections.Generic.IList`1", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")]), $asm06.TypeRef("System.Collections.Generic.ICollection`1", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")]), 
      $asm06.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")]), $asm06.TypeRef("System.Collections.IEnumerable")
  )
})
  .Attribute($asm06.TypeRef("System.Reflection.DefaultMemberAttribute"), function () { return ["Item"]; });

JSIL.MakeStruct($asm06.TypeRef("System.ValueType"), "Microsoft.Xna.Framework.Input.Touch.TouchCollection/LocInfo", false, [], function ($) {
  var $thisType = $.publicInterface;

  $.ExternalMethod({Static:false, Public:true }, ".ctor", 
    $sig.make(0x14E73, null, [
        $.Int32, $.Single, 
        $.Single
      ], [])
  );

  $.Field({Static:false, Public:true }, "Id", $.Int32); 
  $.Field({Static:false, Public:true }, "X", $.Single); 
  $.Field({Static:false, Public:true }, "Y", $.Single); 
});

JSIL.MakeStruct($asm06.TypeRef("System.ValueType"), "Microsoft.Xna.Framework.Input.Touch.TouchCollection/Enumerator", false, [], function ($) {
  var $thisType = $.publicInterface;

  $.ExternalMethod({Static:false, Public:false}, ".ctor", 
    $sig.make(0x14E7C, null, [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchCollection")], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Dispose", 
    $sig.make(0x14E7F, null, [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Current", 
    $sig.make(0x14E7A, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "MoveNext", 
    $sig.make(0x14E7D, $.Boolean, [], [])
  );

  $.ExternalMethod({Static:false, Public:false}, "IEnumerator.get_Current", 
    $sig.make(0x14E7B, $.Object, [], [])
  );

  $.ExternalMethod({Static:false, Public:false}, "IEnumerator.Reset", 
    $sig.make(0x14E7E, null, [], [])
  );

  $.Field({Static:false, Public:false}, "collection", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchCollection")); 
  $.Field({Static:false, Public:false}, "position", $.Int32); 
  $.Property({Static:false, Public:true , Virtual:true }, "Current", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation"));

  $.Property({Static:false, Public:false, Virtual:true }, "IEnumerator.Current", $.Object);

  $.ImplementInterfaces(
      $asm06.TypeRef("System.Collections.Generic.IEnumerator`1", [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocation")]), $asm06.TypeRef("System.IDisposable"), 
      $asm06.TypeRef("System.Collections.IEnumerator")
  )
});

JSIL.MakeEnum(
  "Microsoft.Xna.Framework.Input.Touch.TouchLocationState", true, {
    Invalid: 0, 
    Released: 1, 
    Pressed: 2, 
    Moved: 3
  }, false
);

JSIL.MakeStruct($asm06.TypeRef("System.ValueType"), "Microsoft.Xna.Framework.Input.Touch.TouchPanelCapabilities", true, [], function ($) {
  var $thisType = $.publicInterface;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm06.System.Boolean)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm06.System.Int32)) ();
  };

  $.Method({Static:false, Public:true }, "get_IsConnected", 
    $sig.make(0x14E08, $.Boolean, [], []), 
    function TouchPanelCapabilities_get_IsConnected () {
      return this.TouchPanelCapabilities$IsConnected$value;
    }
  )
    .Attribute($asm06.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

  $.Method({Static:false, Public:true }, "get_MaximumTouchCount", 
    $sig.make(0x14E0B, $.Int32, [], []), 
    function TouchPanelCapabilities_get_MaximumTouchCount () {
      return this.TouchPanelCapabilities$MaximumTouchCount$value;
    }
  )
    .Attribute($asm06.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

  $.ExternalMethod({Static:true , Public:false}, "GetCaps", 
    $sig.make(0x14E0F, $.Type, [], [])
  );

  $.Method({Static:false, Public:false}, "set_IsConnected", 
    $sig.make(0x14E09, null, [$.Boolean], []), 
    function TouchPanelCapabilities_set_IsConnected (value) {
      this.TouchPanelCapabilities$IsConnected$value = value;
    }
  )
    .Attribute($asm06.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

  $.Method({Static:false, Public:false}, "set_MaximumTouchCount", 
    $sig.make(0x14E0D, null, [$.Int32], []), 
    function TouchPanelCapabilities_set_MaximumTouchCount (value) {
      this.TouchPanelCapabilities$MaximumTouchCount$value = value;
    }
  )
    .Attribute($asm06.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

  $.Field({Static:false, Public:false}, "TouchPanelCapabilities$IsConnected$value", $.Boolean)
    .Attribute($asm06.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute")); 
  $.Field({Static:false, Public:false}, "TouchPanelCapabilities$MaximumTouchCount$value", $.Int32)
    .Attribute($asm06.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute")); 
  $.Property({Static:false, Public:true }, "IsConnected", $.Boolean);

  $.Property({Static:false, Public:true }, "MaximumTouchCount", $.Int32);

});

JSIL.MakeStruct($asm06.TypeRef("System.ValueType"), "Microsoft.Xna.Framework.Input.Touch.TouchLocation", true, [], function ($) {
  var $thisType = $.publicInterface;

  $.ExternalMethod({Static:false, Public:true }, ".ctor", 
    $sig.make(0x14E47, null, [
        $.Int32, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), 
        $asm01.TypeRef("Microsoft.Xna.Framework.Vector2")
      ], [])
  );

  $.ExternalMethod({Static:false, Public:true }, ".ctor", 
    $sig.make(0x14E48, null, [
        $.Int32, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), 
        $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), 
        $asm01.TypeRef("Microsoft.Xna.Framework.Vector2")
      ], [])
  );

  $.ExternalMethod({Static:false, Public:false}, ".ctor", 
    $sig.make(0x14E4A, null, [
        $.Int32, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), 
        $.Single, $.Single, 
        $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), $.Single, 
        $.Single
      ], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Equals", 
    $sig.make(0x14E4C, $.Boolean, [$.Type], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "Object.Equals", 
    $sig.make(0x14E4D, $.Boolean, [$.Object], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Id", 
    $sig.make(0x14E45, $.Int32, [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_Position", 
    $sig.make(0x14E46, $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "get_State", 
    $sig.make(0x14E44, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"), [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "GetHashCode", 
    $sig.make(0x14E4E, $.Int32, [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "op_Equality", 
    $sig.make(0x14E4F, $.Boolean, [$.Type, $.Type], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "op_Inequality", 
    $sig.make(0x14E50, $.Boolean, [$.Type, $.Type], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "toString", 
    $sig.make(0x14E4B, $.String, [], [])
  );

  $.ExternalMethod({Static:false, Public:true }, "TryGetPreviousLocation", 
    $sig.make(0x14E49, $.Boolean, [$jsilcore.TypeRef("JSIL.Reference", [$.Type])], [])
  );

  $.Field({Static:false, Public:false}, "id", $.Int32); 
  $.Field({Static:false, Public:false}, "state", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState")); 
  $.Field({Static:false, Public:false}, "x", $.Single); 
  $.Field({Static:false, Public:false}, "y", $.Single); 
  $.Field({Static:false, Public:false}, "prevState", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState")); 
  $.Field({Static:false, Public:false}, "prevX", $.Single); 
  $.Field({Static:false, Public:false}, "prevY", $.Single); 
  $.Property({Static:false, Public:true }, "State", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchLocationState"));

  $.Property({Static:false, Public:true }, "Id", $.Int32);

  $.Property({Static:false, Public:true }, "Position", $asm01.TypeRef("Microsoft.Xna.Framework.Vector2"));

  $.ImplementInterfaces($asm06.TypeRef("System.IEquatable`1", [$.Type]))
});

JSIL.MakeStaticClass("Microsoft.Xna.Framework.Input.Touch.TouchPanel", true, [], function ($) {
  var $thisType = $.publicInterface;

  $.ExternalMethod({Static:true , Public:true }, "get_DisplayHeight", 
    $sig.make(0x14E64, $.Int32, [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "get_DisplayOrientation", 
    $sig.make(0x14E60, $asm01.TypeRef("Microsoft.Xna.Framework.DisplayOrientation"), [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "get_DisplayWidth", 
    $sig.make(0x14E62, $.Int32, [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "get_EnabledGestures", 
    $sig.make(0x14E57, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType"), [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "get_IsGestureAvailable", 
    $sig.make(0x14E5A, $.Boolean, [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "get_WindowHandle", 
    $sig.make(0x14E5C, $asm06.TypeRef("System.IntPtr"), [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "GetCapabilities", 
    $sig.make(0x14E66, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchPanelCapabilities"), [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "GetState", 
    $sig.make(0x14E68, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchCollection"), [], [])
  );

  $.ExternalMethod({Static:true , Public:false}, "OnDisplaySettingsChanged", 
    $sig.make(0x14E69, null, [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "ReadGesture", 
    $sig.make(0x14E67, $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureSample"), [], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "set_DisplayHeight", 
    $sig.make(0x14E65, null, [$.Int32], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "set_DisplayOrientation", 
    $sig.make(0x14E61, null, [$asm01.TypeRef("Microsoft.Xna.Framework.DisplayOrientation")], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "set_DisplayWidth", 
    $sig.make(0x14E63, null, [$.Int32], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "set_EnabledGestures", 
    $sig.make(0x14E58, null, [$asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType")], [])
  );

  $.ExternalMethod({Static:true , Public:true }, "set_WindowHandle", 
    $sig.make(0x14E5E, null, [$asm06.TypeRef("System.IntPtr")], [])
  );

  $.Constant({Static:true , Public:false}, "AllGestureTypes", 1023); 
  $.Field({Static:true , Public:false}, "nointerop", $.Boolean, false); 
  $.Field({Static:true , Public:false}, "prevState", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.XNAINPUT_TOUCH_LOCATION_STATE")); 
  $.Field({Static:true , Public:false}, "touchState", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.TouchCollection")); 
  $.Field({Static:true , Public:false}, "displayOrientation", $asm01.TypeRef("Microsoft.Xna.Framework.DisplayOrientation")); 
  $.Field({Static:true , Public:false}, "displayWidth", $.Int32); 
  $.Field({Static:true , Public:false}, "displayHeight", $.Int32); 
  $.Field({Static:true , Public:false}, "displaySettingsChanged", $.Boolean); 
  $.Field({Static:true , Public:false}, "_enabledGestures", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType")); 
  $.Field({Static:true , Public:false}, "_haveGestureBeenEnabled", $.Boolean); 
  $.Method({Static:true , Public:false}, ".cctor", 
    $sig.make(0x2AA71, null, [], []), 
    function TouchPanel__cctor () {
      $thisType.prevState = new $asm05.Microsoft.Xna.Framework.Input.Touch.XNAINPUT_TOUCH_LOCATION_STATE();
      $thisType.touchState = new $asm05.Microsoft.Xna.Framework.Input.Touch.TouchCollection();
    }
  );

  $.Property({Static:true , Public:true }, "EnabledGestures", $asm05.TypeRef("Microsoft.Xna.Framework.Input.Touch.GestureType"));

  $.Property({Static:true , Public:true }, "IsGestureAvailable", $.Boolean);

  $.Property({Static:true , Public:true }, "WindowHandle", $asm06.TypeRef("System.IntPtr"));

  $.Property({Static:true , Public:true }, "DisplayOrientation", $asm01.TypeRef("Microsoft.Xna.Framework.DisplayOrientation"));

  $.Property({Static:true , Public:true }, "DisplayWidth", $.Int32);

  $.Property({Static:true , Public:true }, "DisplayHeight", $.Int32);

});

JSIL.MakeStruct($asm06.TypeRef("System.ValueType"), "Microsoft.Xna.Framework.Input.Touch.XNAINPUT_TOUCH_LOCATION_STATE", false, [], function ($) {
  var $thisType = $.publicInterface;

  $.Field({Static:false, Public:true }, "Count", $.Int32); 
  $.Field({Static:false, Public:true }, "Id0", $.Int32); 
  $.Field({Static:false, Public:true }, "Id1", $.Int32); 
  $.Field({Static:false, Public:true }, "Id2", $.Int32); 
  $.Field({Static:false, Public:true }, "Id3", $.Int32); 
  $.Field({Static:false, Public:true }, "X0", $.Single); 
  $.Field({Static:false, Public:true }, "Y0", $.Single); 
  $.Field({Static:false, Public:true }, "X1", $.Single); 
  $.Field({Static:false, Public:true }, "Y1", $.Single); 
  $.Field({Static:false, Public:true }, "X2", $.Single); 
  $.Field({Static:false, Public:true }, "Y2", $.Single); 
  $.Field({Static:false, Public:true }, "X3", $.Single); 
  $.Field({Static:false, Public:true }, "Y3", $.Single); 
});

