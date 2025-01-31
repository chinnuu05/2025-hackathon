import React from "react";

const FeaturebaseWidget = () => {
  return (
    <>
      {/* Importing the Featurebase SDK */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !(function(e,t){
              const a="featurebase-sdk";
              function n(){
                if(!t.getElementById(a)){
                  var e=t.createElement("script");
                  (e.id=a),
                  (e.src="https://do.featurebase.app/js/sdk.js"),
                  t.getElementsByTagName("script")[0].parentNode.insertBefore(e,t.getElementsByTagName("script")[0])
                }
              }
              "function"!=typeof e.Featurebase&&(e.Featurebase=function(){
                (e.Featurebase.q=e.Featurebase.q||[]).push(arguments)
              }),
              "complete"===t.readyState||"interactive"===t.readyState?n():t.addEventListener("DOMContentLoaded",n)
            })(window,document);
          `,
        }}
      />

      {/* Initializing the Featurebase widget */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            Featurebase("initialize_feedback_widget", {
              organization: "notofox", // Replace with your organization name
              theme: "light", // required
              placement: "right", // optional - remove to hide the floating button
              email: "youruser@example.com", // optional
              defaultBoard: "yourboardname", // optional - preselect a board
              locale: "en", // Change the language
              metadata: null // Attach session-specific metadata to feedback
            });
          `,
        }}
      />
    </>
  );
};

export default FeaturebaseWidget;
