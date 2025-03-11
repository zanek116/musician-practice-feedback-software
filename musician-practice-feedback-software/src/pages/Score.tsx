import React, { useEffect, useRef } from 'react';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';

const Score = () => {
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null);

  useEffect(() => {
    const doc = `<?xml version="1.0" encoding="UTF-16"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.0">
  <work>
    <work-number>K. 476</work-number>
    <work-title>Das Veilchen (Page 1)</work-title>
  </work>
  <identification>
    <creator type="composer">Wolfgang Amadeus Mozart</creator>
    <creator type="lyricist">Johann Wolfgang von Goethe</creator>
    <rights>Copyright © 2002 Recordare LLC</rights>
    <encoding>
      <software>Finale 2011 for Windows</software>
      <software>Dolet 6.0 for Finale</software>
      <encoding-date>2011-08-08</encoding-date>
      <supports attribute="new-system" element="print" type="yes" value="yes"/>
      <supports attribute="new-page" element="print" type="yes" value="yes"/>
    </encoding>
  </identification>
  <defaults>
    <scaling>
      <millimeters>6.35</millimeters>
      <tenths>40</tenths>
    </scaling>
    <page-layout>
      <page-height>1760</page-height>
      <page-width>1360</page-width>
      <page-margins type="both">
        <left-margin>80</left-margin>
        <right-margin>80</right-margin>
        <top-margin>80</top-margin>
        <bottom-margin>80</bottom-margin>
      </page-margins>
    </page-layout>
    <system-layout>
      <system-margins>
        <left-margin>0</left-margin>
        <right-margin>0</right-margin>
      </system-margins>
      <system-distance>130</system-distance>
      <top-system-distance>70</top-system-distance>
    </system-layout>
    <staff-layout>
      <staff-distance>80</staff-distance>
    </staff-layout>
    <appearance>
      <line-width type="stem">0.8333</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="staff">1.25</line-width>
      <line-width type="light barline">1.875</line-width>
      <line-width type="heavy barline">5</line-width>
      <line-width type="leger">1.875</line-width>
      <line-width type="ending">1.25</line-width>
      <line-width type="wedge">0.8333</line-width>
      <line-width type="enclosure">1.25</line-width>
      <line-width type="tuplet bracket">0.8333</line-width>
      <note-size type="grace">60</note-size>
      <note-size type="cue">60</note-size>
      <distance type="hyphen">100</distance>
      <distance type="beam">8</distance>
    </appearance>
    <music-font font-family="Maestro,engraved" font-size="18"/>
    <word-font font-family="Times New Roman" font-size="9"/>
    <lyric-font font-family="Times New Roman" font-size="10"/>
  </defaults>
  <credit page="1">
    <credit-type>page number</credit-type>
    <credit-words default-x="80" default-y="1680" font-size="12" valign="top">2</credit-words>
  </credit>
  <credit page="1">
    <credit-type>rights</credit-type>
    <credit-words default-x="680" default-y="80" font-size="9" halign="center" valign="bottom">Copyright © 2002 Recordare LLC</credit-words>
  </credit>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="680" default-y="1640" font-size="24" justify="center" valign="top">Das Veilchen</credit-words>
  </credit>
  <credit page="1">
    <credit-words default-x="680" default-y="1580" font-size="14" halign="center" valign="top">K. 476</credit-words>
  </credit>
  <credit page="1">
    <credit-type>lyricist</credit-type>
    <credit-words default-x="80" default-y="1500" font-size="10" halign="left" justify="center" valign="bottom">Johann Wolfgang von Goethe</credit-words>
  </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1280" default-y="1500" font-size="10" halign="right" justify="center" valign="bottom">Wolfgang Amadeus Mozart</credit-words>
  </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Voice</part-name>
      <score-instrument id="P1-I2">
        <instrument-name>Voice</instrument-name>
      </score-instrument>
      <midi-instrument id="P1-I2">
        <midi-channel>1</midi-channel>
        <midi-program>53</midi-program>
        <volume>80</volume>
        <pan>0</pan>
      </midi-instrument>
    </score-part>
    <score-part id="P2">
      <part-name>Piano</part-name>
      <score-instrument id="P2-I3">
        <instrument-name>Piano</instrument-name>
      </score-instrument>
      <midi-instrument id="P2-I3">
        <midi-channel>2</midi-channel>
        <midi-program>1</midi-program>
        <volume>80</volume>
        <pan>0</pan>
      </midi-instrument>
    </score-part>
  </part-list>
  <!--=========================================================-->
  <part id="P1">
    <measure implicit="yes" number="0">
      <print>
        <measure-numbering>system</measure-numbering>
      </print>
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>1</fifths>
          <mode>major</mode>
        </key>
        <time>
          <beats>2</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
        <staff-details print-object="no"/>
      </attributes>
      <note>
        <rest measure="yes"/>
        <duration>2</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="1">
      <print new-system="no"/>
      <note>
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="2">
      <print new-system="no"/>
      <note>
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="3">
      <print new-system="no"/>
      <note>
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="4">
      <print new-system="no"/>
      <note>
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="5">
      <print new-system="no"/>
      <note>
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="6" width="234">
      <print new-system="yes">
        <system-layout>
          <system-distance>100</system-distance>
        </system-layout>
      </print>
      <attributes>
        <staff-details print-object="yes"/>
      </attributes>
      <note>
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="7" width="125">
      <print new-system="no"/>
      <note default-x="15">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note default-x="60">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="92">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="6">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>Ein</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="8" width="215">
      <print new-system="no"/>
      <note default-x="27">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-53">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>Veil</text>
        </lyric>
      </note>
      <note default-x="74">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-53">down</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>chen</text>
        </lyric>
      </note>
      <note default-x="121">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-53">down</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>auf</text>
        </lyric>
      </note>
      <note default-x="167">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-53">down</stem>
        <beam number="1">end</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>der</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="9" width="215">
      <print new-system="no"/>
      <note default-x="13">
        <grace steal-time-following="33"/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <notations>
          <slur bezier-x="-3" bezier-y="-6" default-x="5" default-y="-9" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="30">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="-47">down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-3" bezier-y="-2" default-x="-4" default-y="-15" number="1" type="stop"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>Wie</text>
        </lyric>
      </note>
      <note default-x="87">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-50">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>se</text>
        </lyric>
      </note>
      <note default-x="123">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <lyric default-y="-80" number="1" relative-x="5">
          <syllabic>single</syllabic>
          <text>stand,</text>
        </lyric>
      </note>
      <note default-x="158">
        <rest/>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
      </note>
      <note default-x="184">
        <pitch>
          <step>G</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-30.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>ge</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="10" width="215">
      <print new-system="no"/>
      <note default-x="16">
        <grace steal-time-following="50"/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="26">up</stem>
        <notations>
          <slur bezier-x="-3" bezier-y="-6" default-x="5" default-y="1" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-32">down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-5" bezier-y="-4" default-x="-3" default-y="-6" number="1" type="stop"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>bückt</text>
        </lyric>
      </note>
      <note default-x="66">
        <rest>
          <display-step>F</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
      </note>
      <note default-x="93">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-32">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>in</text>
        </lyric>
      </note>
      <note default-x="113">
        <grace steal-time-following="50"/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="21">up</stem>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="129">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>sich</text>
        </lyric>
      </note>
      <note default-x="162">
        <rest>
          <display-step>F</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
      </note>
      <note default-x="188">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-40">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>und</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="11" width="197">
      <print new-system="no"/>
      <note default-x="13">
        <grace steal-time-following="33"/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <notations>
          <slur bezier-x="-2" bezier-y="-5" default-x="5" default-y="-10" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="29">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="-47">down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-4" bezier-y="-3" default-x="-4" default-y="-16" number="1" type="stop"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>un</text>
        </lyric>
      </note>
      <note default-x="89">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-50">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1">
          <syllabic>middle</syllabic>
          <text>be</text>
        </lyric>
      </note>
      <note default-x="123">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <lyric default-y="-80" number="1" relative-x="12">
          <syllabic>end</syllabic>
          <text>kannt:</text>
        </lyric>
      </note>
      <note default-x="162">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="12" width="231">
      <print new-system="yes">
        <system-layout>
          <system-distance>100</system-distance>
        </system-layout>
      </print>
      <note default-x="81">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="114">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-57">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>es</text>
        </lyric>
      </note>
      <note default-x="154">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-54">down</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>war</text>
        </lyric>
      </note>
      <note default-x="194">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-50">down</stem>
        <beam number="1">end</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>ein</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="13" width="185">
      <print new-system="no"/>
      <note default-x="23">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="20">up</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>her</text>
        </lyric>
      </note>
      <note default-x="72">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="10">up</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>zig’s</text>
        </lyric>
      </note>
      <note default-x="116">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="13">up</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>begin</syllabic>
          <text>Veil</text>
        </lyric>
      </note>
      <note default-x="153">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="14" width="136">
      <print new-system="no"/>
      <note default-x="32">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="6">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>chen.</text>
        </lyric>
      </note>
      <note default-x="74">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="105">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="11">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>Da</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="15" width="192">
      <print new-system="no"/>
      <note default-x="28">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-52">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>kam</text>
        </lyric>
      </note>
      <note default-x="73">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem default-y="-52">down</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>ein’</text>
        </lyric>
      </note>
      <note default-x="116">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-52">down</stem>
        <beam number="1">continue</beam>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>jun</text>
        </lyric>
      </note>
      <note default-x="155">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-52">down</stem>
        <beam number="1">end</beam>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>ge</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="16" width="180">
      <print new-system="no"/>
      <note default-x="29">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="-45">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>Schä</text>
        </lyric>
      </note>
      <note default-x="77">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-57">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1">
          <syllabic>middle</syllabic>
          <text>fer</text>
        </lyric>
      </note>
      <note default-x="107">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="5">up</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>in</text>
        </lyric>
      </note>
      <note default-x="144">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="5">up</stem>
        <beam number="1">end</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>mit</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="17" width="275">
      <print new-system="no"/>
      <note default-x="21">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-42">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>leich</text>
        </lyric>
      </note>
      <note default-x="81">
        <rest>
          <display-step>D</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
      </note>
      <note default-x="110">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-42">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1" relative-x="-2">
          <syllabic>end</syllabic>
          <text>tem</text>
        </lyric>
      </note>
      <note default-x="152">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-42">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1" relative-x="9">
          <syllabic>single</syllabic>
          <text>Schritt</text>
        </lyric>
      </note>
      <note default-x="211">
        <rest>
          <display-step>D</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
      </note>
      <note default-x="241">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-42">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>und</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="18" width="333">
      <print new-system="yes">
        <system-layout>
          <system-distance>100</system-distance>
        </system-layout>
      </print>
      <note default-x="93">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-42">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>mun</text>
        </lyric>
      </note>
      <note default-x="156">
        <rest>
          <display-step>D</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
      </note>
      <note default-x="191">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-42">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <lyric default-y="-80" number="1" relative-x="-2">
          <syllabic>end</syllabic>
          <text>term</text>
        </lyric>
      </note>
      <note default-x="238">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-45">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>Sinn</text>
        </lyric>
      </note>
      <note default-x="288">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-57">down</stem>
        <beam number="1">end</beam>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>da</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="19" width="253">
      <print new-system="no"/>
      <note default-x="24">
        <pitch>
          <step>G</step>
          <octave>5</octave>
        </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-30.5">down</stem>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>end</syllabic>
          <text>her,</text>
        </lyric>
      </note>
      <note default-x="197">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>da</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="20" width="246">
      <print new-system="no"/>
      <note default-x="24">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>end</syllabic>
          <text>her,</text>
        </lyric>
      </note>
      <note default-x="79">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-42">down</stem>
        <beam number="1">end</beam>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>die</text>
        </lyric>
      </note>
      <note default-x="134">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-50">down</stem>
        <beam number="1">begin</beam>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>begin</syllabic>
          <text>Wie</text>
        </lyric>
      </note>
      <note default-x="189">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem default-y="-50">down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>se</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="217">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-50">down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="21" width="177">
      <print new-system="no"/>
      <note default-x="15">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>single</syllabic>
          <text>her,</text>
        </lyric>
      </note>
      <note default-x="55">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
      </note>
      <note default-x="93">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>sharp</accidental>
        <stem default-y="-45">down</stem>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>und</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="148">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-42">down</stem>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="22" width="191">
      <print new-system="no"/>
      <note default-x="30">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-45.5">down</stem>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>single</syllabic>
          <text>sang.</text>
        </lyric>
      </note>
      <note default-x="103">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
    </measure>
  </part>
  <!--=========================================================-->
  <part id="P2">
    <measure implicit="yes" number="0" width="165">
      <print page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>120</left-margin>
            <right-margin>0</right-margin>
          </system-margins>
          <top-system-distance>230</top-system-distance>
        </system-layout>
        <measure-numbering>none</measure-numbering>
      </print>
      <attributes>
        <divisions>8</divisions>
        <key>
          <fifths>1</fifths>
          <mode>major</mode>
        </key>
        <time>
          <beats>2</beats>
          <beat-type>4</beat-type>
        </time>
        <staves>2</staves>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
        </clef>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
        </clef>
      </attributes>
      <direction directive="yes" placement="above">
        <direction-type>
          <words default-y="15" font-size="10.5" font-weight="bold">Allegretto</words>
        </direction-type>
        <staff>1</staff>
        <sound tempo="60"/>
      </direction>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-75" halign="left" relative-x="-5">
            <p/>
          </dynamics>
        </direction-type>
        <staff>1</staff>
        <sound dynamics="54"/>
      </direction>
      <note default-x="122">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="6">up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>4</duration>
      </backup>
      <note default-x="122">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="1" width="153">
      <print new-system="no"/>
      <note default-x="15">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="20">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="49">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="21">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="83">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="22">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="117">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="15">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="15">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="49">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="83">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="117">
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="2" width="220">
      <print new-system="no"/>
      <note default-x="20">
        <grace steal-time-following="33"/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
        <notations>
          <slur bezier-x="0" bezier-y="-6" default-x="5" default-y="-9" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="37">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-4" bezier-y="-4" default-x="0" default-y="-15" number="1" type="stop"/>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="92">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="20">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="121">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="161">
        <rest>
          <display-step>F</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
      </note>
      <note default-x="189">
        <pitch>
          <step>G</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="38">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="37">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>8</duration>
      </backup>
      <note default-x="20">
        <grace steal-time-following="33"/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="31">up</stem>
        <staff>2</staff>
        <notations>
          <slur bezier-x="-2" bezier-y="-6" default-x="4" default-y="6" number="2" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="37">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="-30">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-5" bezier-y="-4" default-x="-2" default-y="-2" number="2" type="stop"/>
          <slur number="2" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="92">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="-32">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="121">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur number="2" type="stop"/>
        </notations>
      </note>
      <note default-x="161">
        <rest>
          <display-step>C</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
      </note>
      <note default-x="189">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="51">up</stem>
        <staff>2</staff>
        <notations>
          <slur number="2" placement="above" type="start"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <forward>
        <duration>8</duration>
        <voice>6</voice>
        <staff>2</staff>
      </forward>
      <forward>
        <duration>4</duration>
        <voice>6</voice>
        <staff>2</staff>
      </forward>
      <note default-x="161">
        <rest>
          <display-step>B</display-step>
          <display-octave>2</display-octave>
        </rest>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="3" width="202">
      <print new-system="no"/>
      <note default-x="18">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="55">
        <rest>
          <display-step>F</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
      </note>
      <note default-x="82">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="109">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="147">
        <rest>
          <display-step>F</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
      </note>
      <note default-x="173">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="55">
        <rest>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="109">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="147">
        <rest>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="45">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="2" type="stop"/>
        </notations>
      </note>
      <note default-x="55">
        <rest>
          <display-step>C</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
      </note>
      <note default-x="82">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="45">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="109">
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="43">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="147">
        <rest>
          <display-step>C</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
      </note>
      <note default-x="173">
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="43">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="55">
        <rest>
          <display-step>B</display-step>
          <display-octave>2</display-octave>
        </rest>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="109">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="147">
        <rest>
          <display-step>B</display-step>
          <display-octave>2</display-octave>
        </rest>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="4" width="188">
      <print new-system="no"/>
      <note default-x="20">
        <grace steal-time-following="33"/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
        <notations>
          <slur bezier-x="0" bezier-y="-6" default-x="5" default-y="-9" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="37">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-4" bezier-y="-4" default-x="0" default-y="-15" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="87">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="20">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="113">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="149">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="37">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>8</duration>
      </backup>
      <note default-x="20">
        <grace steal-time-following="33"/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="31">up</stem>
        <staff>2</staff>
        <notations>
          <slur bezier-x="-3" bezier-y="-7" default-x="4" default-y="8" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="37">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="40">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-2" bezier-y="-5" default-x="-1" default-y="-1" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="87">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="38">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="113">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="26">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="149">
        <rest>
          <display-step>D</display-step>
          <display-octave>3</display-octave>
        </rest>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="37">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="5" width="154">
      <print new-system="no"/>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-80" halign="left">
            <f/>
          </dynamics>
        </direction-type>
        <offset sound="yes">1</offset>
        <staff>1</staff>
        <sound dynamics="98"/>
      </direction>
      <note default-x="15">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="50">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="50">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="84">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="14">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="84">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="117">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="18">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="117">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <forward>
        <duration>4</duration>
        <voice>2</voice>
        <staff>1</staff>
      </forward>
      <note default-x="50">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-70.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="15">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="50">
        <pitch>
          <step>C</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-55">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="50">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
      <note default-x="84">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-59">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="84">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
      <note default-x="117">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-62">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="117">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="6" width="234">
      <print new-system="yes">
        <staff-layout number="1">
          <staff-distance>100</staff-distance>
        </staff-layout>
        <staff-layout number="2">
          <staff-distance>70</staff-distance>
        </staff-layout>
      </print>
      <note default-x="81">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="20">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="81">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="116">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
      </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-75" halign="left" relative-x="-12">
            <p/>
          </dynamics>
        </direction-type>
        <staff>1</staff>
        <sound dynamics="54"/>
      </direction>
      <note default-x="139">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="10">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="163">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="13">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="198">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="81">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-75.5">down</stem>
        <staff>1</staff>
      </note>
      <forward>
        <duration>4</duration>
        <voice>2</voice>
        <staff>1</staff>
      </forward>
      <note default-x="163">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-60">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="198">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-62">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="81">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="81">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
      <note default-x="116">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="163">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-45">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="198">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-52">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="7" width="125">
      <print new-system="no"/>
      <note default-x="15">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="6">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="60">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="92">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="6">up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <forward>
        <duration>8</duration>
        <voice>2</voice>
        <staff>1</staff>
      </forward>
      <backup>
        <duration>8</duration>
      </backup>
      <note default-x="15">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="60">
        <rest/>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="8" width="215">
      <print new-system="no"/>
      <note default-x="27">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="20">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="74">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="21">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="121">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="22">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="167">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="27">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>16</duration>
        <voice>2</voice>
        <type>half</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="27">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="74">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="121">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="167">
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="9" width="215">
      <print new-system="no"/>
      <note default-x="13">
        <grace steal-time-following="33"/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
        <notations>
          <slur bezier-x="-1" bezier-y="-6" default-x="5" default-y="-10" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="30">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-3" bezier-y="-4" default-x="0" default-y="-16" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="87">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="20">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="123">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="158">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
      </note>
      <note default-x="184">
        <pitch>
          <step>G</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="36">up</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="30">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>8</duration>
      </backup>
      <note default-x="13">
        <grace steal-time-following="33"/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="31">up</stem>
        <staff>2</staff>
        <notations>
          <slur bezier-x="-3" bezier-y="-7" default-x="4" default-y="8" number="2" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="30">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="40">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-2" bezier-y="-5" default-x="-1" default-y="-1" number="2" type="stop"/>
        </notations>
      </note>
      <note default-x="87">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="38">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="123">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="26">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="158">
        <rest>
          <display-step>A</display-step>
          <display-octave>3</display-octave>
        </rest>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
      </note>
      <note default-x="184">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="51">up</stem>
        <staff>2</staff>
        <notations>
          <slur number="2" placement="above" type="start"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="30">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="10" width="215">
      <print new-system="no"/>
      <note default-x="33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="67">
        <rest>
          <display-step>F</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
      </note>
      <note default-x="93">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="129">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="162">
        <rest>
          <display-step>F</display-step>
          <display-octave>5</display-octave>
        </rest>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <staff>1</staff>
      </note>
      <note default-x="188">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="33">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="33">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="67">
        <rest>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="129">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="162">
        <rest>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="33">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="45">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="2" type="stop"/>
        </notations>
      </note>
      <note default-x="67">
        <rest>
          <display-step>C</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
      </note>
      <note default-x="93">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="45">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="129">
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="43">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="162">
        <rest>
          <display-step>C</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <staff>2</staff>
      </note>
      <note default-x="188">
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="43">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="67">
        <rest>
          <display-step>B</display-step>
          <display-octave>2</display-octave>
        </rest>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="129">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="162">
        <rest>
          <display-step>B</display-step>
          <display-octave>2</display-octave>
        </rest>
        <duration>4</duration>
        <voice>6</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="11" width="197">
      <print new-system="no"/>
      <note default-x="13">
        <grace steal-time-following="33"/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
        <notations>
          <slur bezier-x="0" bezier-y="-6" default-x="5" default-y="-9" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="29">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-4" bezier-y="-4" default-x="0" default-y="-15" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="89">
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="20">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="123">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="162">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="29">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>8</duration>
      </backup>
      <note default-x="13">
        <grace steal-time-following="33"/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="31">up</stem>
        <staff>2</staff>
        <notations>
          <slur bezier-x="-3" bezier-y="-7" default-x="4" default-y="8" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="29">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <dot/>
        <stem default-y="40">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="-2" bezier-y="-5" default-x="-1" default-y="-1" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="89">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>5</voice>
        <type>16th</type>
        <stem default-y="38">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <beam number="2">backward hook</beam>
      </note>
      <note default-x="123">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="26">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="162">
        <rest>
          <display-step>D</display-step>
          <display-octave>3</display-octave>
        </rest>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="29">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>6</voice>
        <type>quarter</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="12" width="231">
      <print new-system="yes">
        <staff-layout number="2">
          <staff-distance>60</staff-distance>
        </staff-layout>
      </print>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-75" halign="left">
            <f/>
          </dynamics>
        </direction-type>
        <offset sound="yes">1</offset>
        <staff>1</staff>
        <sound dynamics="98"/>
      </direction>
      <note default-x="81">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="114">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="114">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="154">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="14">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="154">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="194">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="18">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="194">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <forward>
        <duration>4</duration>
        <voice>2</voice>
        <staff>1</staff>
      </forward>
      <note default-x="114">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>2</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-70.5">down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="81">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="114">
        <pitch>
          <step>C</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-55">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="114">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
      <note default-x="154">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-59">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="154">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
      <note default-x="194">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-62">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="194">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="13" width="185">
      <print new-system="no"/>
      <note default-x="23">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="21">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="23">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="56">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-75" halign="left">
            <p/>
          </dynamics>
        </direction-type>
        <staff>1</staff>
        <sound dynamics="54"/>
      </direction>
      <note default-x="116">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="13">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="116">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="116">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="153">
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="153">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="153">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="23">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-75.5">down</stem>
        <staff>1</staff>
      </note>
      <forward>
        <duration>4</duration>
        <voice>2</voice>
        <staff>1</staff>
      </forward>
      <forward>
        <duration>8</duration>
        <voice>2</voice>
        <staff>1</staff>
      </forward>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="23">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="23">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
      </note>
      <note default-x="56">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="116">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="13">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="153">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="3">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="14" width="136">
      <print new-system="no"/>
      <note default-x="32">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="6">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="32">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="74">
        <rest/>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="32">
        <pitch>
          <step>G</step>
          <octave>2</octave>
        </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem default-y="-4">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="74">
        <rest/>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="15" width="192">
      <print new-system="no"/>
      <note default-x="28">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="11">up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="28">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem default-y="-70.5">down</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="28">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="116">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem default-y="-65.5">down</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="116">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>2</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="28">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem default-y="-55.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="116">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem default-y="1">up</stem>
        <staff>2</staff>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="16" width="180">
      <print new-system="no"/>
      <note default-x="29">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="11">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="29">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="29">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="107">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="29">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem default-y="-19">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="107">
        <rest/>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="17" width="275">
      <print new-system="no"/>
      <note default-x="21">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="10">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="2" default-y="-49" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="51">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="8">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="3" default-y="-37" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="81">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="5">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="3" default-y="-49" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="110">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="2">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="3" default-y="-59" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="152">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem default-y="3">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="3" default-y="-64" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="181">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="3">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="3" default-y="-47" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="211">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="3">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="3" default-y="-54" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="241">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="3">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="3" default-y="-64" placement="below"/>
          </articulations>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="21">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="81">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="152">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-35.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="211">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="18" width="333">
      <print new-system="yes">
        <staff-layout number="2">
          <staff-distance>60</staff-distance>
        </staff-layout>
      </print>
      <note default-x="93">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="3">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <articulations>
            <staccato default-x="4" default-y="-59" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="126">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="9.5">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4" default-y="-49" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="156">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        <notations>
          <articulations>
            <staccato default-x="4" default-y="-37" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="191">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="23">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <articulations>
            <staccato default-x="4" default-y="-27" placement="below"/>
          </articulations>
        </notations>
      </note>
      <note default-x="238">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem default-y="-50.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="288">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="93">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="156">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="238">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="1">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="288">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="19" width="253">
      <print new-system="no"/>
      <note default-x="24">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-10">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="57">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>sharp</accidental>
        <stem default-y="-9">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="85">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-8">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="112">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-8">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
      </note>
      <note default-x="142">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-8">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
      </note>
      <note default-x="170">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-4">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="197">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-0.5">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="223">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="2">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="24">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="85">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-45">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="142">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem default-y="-54">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="197">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-62">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="20" width="246">
      <print new-system="no"/>
      <note default-x="24">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-10">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="51">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-6.5">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="79">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-3">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="106">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="0">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="134">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="3">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="162">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="5">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="189">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="8">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
      </note>
      <note default-x="217">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="10">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="24">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="79">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-52">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="134">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-52">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="189">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-52">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="21" width="177">
      <print new-system="no"/>
      <note default-x="15">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="55">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="93">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="18">up</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="93">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="93">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="15">
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="55">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="93">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem default-y="-35.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur number="2" placement="above" type="start"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="22" width="191">
      <print new-system="no"/>
      <note default-x="30">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="21">up</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="30">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="66">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="103">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="139">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-57">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="164">
        <pitch>
          <step>A</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem default-y="-50">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>16</duration>
      </backup>
      <note default-x="30">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur number="2" type="stop"/>
        </notations>
      </note>
      <note default-x="66">
        <rest/>
        <duration>4</duration>
        <voice>5</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="103">
        <rest/>
        <duration>8</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
      <attributes>
        <clef number="2">
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
    </measure>
  </part>
  <!--=========================================================-->
</score-partwise>
`
osmdRef.current = new OpenSheetMusicDisplay("osmdContainer");
osmdRef.current.setOptions({
  backend: "svg",
  drawTitle: true,
  autoResize: true,
});
osmdRef.current.load(doc).then(() => {
  if (osmdRef.current) {
    osmdRef.current.render();
  }
});
}, []);

function afterRender() {
if (!osmdRef.current) return;
const cursor = osmdRef.current.cursor;
cursor.reset(); // Ensure the cursor starts at the beginning
cursor.show();

const duration = 100 * 1000; // 10 seconds in milliseconds
const totalSteps = 500; // Increase the number of steps for smoother scrolling
const updateInterval = duration / totalSteps; // Interval between each step

let currentStep = 0;
const interval = setInterval(() => {
  cursor.next();
  currentStep++;
  if (cursor.Iterator.EndReached || currentStep >= totalSteps) {
    clearInterval(interval);
  }
}, updateInterval);
}

return (
<div>
  <button onClick={afterRender}>Start</button>
  <div id="osmdContainer" style={{ height: '100vh', overflowY: 'auto' }} />
</div>
);
};

export default Score;