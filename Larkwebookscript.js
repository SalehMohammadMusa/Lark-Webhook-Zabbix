try {

  var result = {
      'tags': {
          'endpoint':'lark'
      }
  },
  params = JSON.parse(value),
  req = new HttpRequest(),
  msg_type = {},
  resp;


  msg_type = "text";
  message = params.Message
  resp = req.post('REPLACE WITH YOUR WEBHOOK',
      JSON.stringify({"msg_type": msg_type,"content":{"text":message}
})
  );

  if (req.getStatus() != 201) {
      throw 'Response code: '+req.getStatus();
  }

  resp = JSON.parse(resp);
  result.tags.issue_id = resp.id;
  result.tags.issue_key = resp.key;
} catch (error) {
  

  result = {};
}

return JSON.stringify(result);