var count = 0; function addBody(t) { $("body").removeClass("profit neutral loss"), $("body").addClass(t) } function selectStatus(t) { switch (t) { case "profit": $("input[name='status']:eq(0)").val("profit").trigger("click"), addBody("profit"); break; case "neutral": $("input[name='status']:eq(1)").val("neutral").trigger("click"), addBody("neutral"); break; case "loss": $("input[name='status']:eq(2)").val("loss").trigger("click"), addBody("loss"); break; default: break } } $("input[name='status']").change((function (t) { t.preventDefault(); const e = this.value; addBody(e), count > 0 && ($.ajaxSetup({ headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") } }), $.ajax({ type: "post", url: "profit-loss-trigger", data: { state: e }, success: function (t) { t.status ? snb("success", "Updated", t.msg) : snb("error", "Error", "Something went wrong") }, error: function (t) { snb("error", "Error", "Something went wrong") } })), count = 1 }));